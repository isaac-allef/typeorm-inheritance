import { Entity } from "typeorm";
import Institution from "./Institution";

@Entity('school')
class School extends Institution {
}

export default School;