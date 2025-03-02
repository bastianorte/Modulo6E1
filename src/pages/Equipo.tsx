import ApiDoctores from "../components/ApiDoctores";
import Header from '../components/Header';

const Equipo = () => {
    return (
        <>
            <Header>                   
              <h2>Equipo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, ante id pellentesque ullamcorper, purus ex pellentesque mi, id tempor ligula arcu et nisi. Sed sit amet orci facilisis, posuere erat sed, luctus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut purus sit amet mi tristique facilisis. Curabitur scelerisque erat vel lorem fringilla pharetra. Donec nisl metus, semper eget pretium a, pellentesque eget eros. Sed aliquet faucibus porttitor. Maecenas tempor ligula ipsum, id tempus lorem congue a. Etiam eget fringilla magna. Vestibulum at sem nisl. Sed pellentesque non augue ut elementum. </p>
            </Header>
            <ApiDoctores/>            
        </>
    )
}

export default Equipo