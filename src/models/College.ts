import { Column, Entity } from "typeorm";
import Institution from "./Institution";

@Entity('college')
class College extends Institution {
    @Column()
    graduations: string;
}

export default College;