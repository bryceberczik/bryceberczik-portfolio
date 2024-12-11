import { ITechTools } from "@/app/interfaces/interfaces";
import FontAwesome from "react-fontawesome";

const TechTools= ({ brand, name }: ITechTools) => {

    return (

        <div className="w-20 h-20">
            <h1>{name}</h1>
            <FontAwesome name={brand} />
        </div>
    );
};

export default TechTools;