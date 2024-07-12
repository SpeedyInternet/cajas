import { images} from "../../assets/index";

export default function ApplicationLogo(props) {
    return (
        <>
            <img {...props} style={{color:"black"}} src={images.logo}/>
        </>
    );
}
