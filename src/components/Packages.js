import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, index) => <ListGroup.Item key={index}>{eachPackage}</ListGroup.Item>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                <h1>Packages</h1>
            </div>
            <Card style={{ width: '75%', margin: '0 auto'}}>
                <Card.Body>
                    <Card.Text>
                        Check out some of our packages! Every pacakage is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
                    <ListGroup>
                     {displayPackages}   
                    </ListGroup>
            </Card>
        </div>
        </div>
    )
}