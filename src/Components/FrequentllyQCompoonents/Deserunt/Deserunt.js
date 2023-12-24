import './Deserunt.css'
import Accordion from 'react-bootstrap/Accordion';

function Deserunt(){
    return(
        <>
        <div className="DeseruntContainer BackItemStyle">
            <h4>Deserunt ut unde corporis</h4>
            <div className="accordionDeserunt my-3">
            <Accordion defaultActiveKey="10">
            <Accordion.Item eventKey="0" >
                <Accordion.Header> Cumque voluptatem recusandae blanditiis?</Accordion.Header>
                <Accordion.Body>
                Ut quasi odit odio totam accusamus vero eius. Nostrum asperiores voluptatem eos nulla ab dolores est asperiores iure. Quo est quis praesentium aut maiores. Corrupti sed aut expedita fugit vero dolorem. Nemo rerum sapiente. A quaerat dignissimos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Provident beatae eveniet placeat est aperiam repellat adipisci?</Accordion.Header>
                <Accordion.Body>
                In minus quia impedit est quas deserunt deserunt et. Nulla non quo dolores minima fugiat aut saepe aut inventore. Qui nesciunt odio officia beatae iusto sed voluptatem possimus quas. Officia vitae sit voluptatem nostrum a.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Minus aliquam modi id reprehenderit nihil?</Accordion.Header>
                <Accordion.Body>
                Aut necessitatibus maxime quis dolor et. Nihil laboriosam molestiae qui molestias placeat corrupti non quo accusamus. Nemo qui quis harum enim sed. Aliquam molestias pariatur delectus voluptas quidem qui rerum id quisquam. Perspiciatis voluptatem voluptatem eos. Vel aut minus labore at rerum eos.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Quaerat qui est iusto asperiores qui est reiciendis eos et?</Accordion.Header>
                <Accordion.Body>
                Numquam ut reiciendis aliquid. Quia veritatis quasi ipsam sed quo ut eligendi et non. Doloremque sed voluptatem at in voluptas aliquid dolorum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" >
                <Accordion.Header>Laboriosam asperiores eum?</Accordion.Header>
                <Accordion.Body>
                Voluptates magni amet enim perspiciatis atque excepturi itaque est. Sit beatae animi incidunt eum repellat sequi ea saepe inventore. Id et vel et et. Nesciunt itaque corrupti quia ducimus. Consequatur maiores voluptatum fuga quod ut non fuga.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div>
        </div>
        </>
    )
}
export default Deserunt;