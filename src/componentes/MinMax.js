import react from "react-native";
import { Text} from "react-native";
import Estilo from "./Estilo";

export default props =>{
// console.warn(param)
        return(
            <Text style = {Estilo.txtGrande } >
            O valor de {props.min} é maior  que o {props.max}
            </Text>
            )

}