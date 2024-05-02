import { CardOurServices } from '../index'
import { Button } from '../index'
import { dataServices } from '../../services/dataServices'
import './MobileServices.css'

export function MobileServices() {
    return (
        <div>
            {dataServices.map(({ id, description }) => (
                <div key={id} className="data-container">
                    <CardOurServices variant="cardservices-ourservices" description={description} />
                    <Button />
                </div>
            ))}
        </div>
    );
}