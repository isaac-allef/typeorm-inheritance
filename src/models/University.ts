import { Column, Entity } from "typeorm";
import Institution from "./Institution";

@Entity('university')
class University extends Institution {

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;
}

export default University;