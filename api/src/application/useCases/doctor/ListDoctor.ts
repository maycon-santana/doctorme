import DatabaseService from "@/infra/DatabaseService";

export default class ListDoctorUseCase {
    constructor(readonly database: DatabaseService) {}
    
    async execute() {
        const doctors = await this.database.listDoctor();

        if(!doctors) {
            throw new Error('Nenhum médico encontrado');
        }

        return doctors;
    }
}