import DatabaseService from "@/infra/DatabaseService";

export default class GetDoctorByIdUseCase {
    constructor(readonly database: DatabaseService) {}

    async execute(id: number) {

        // Incluir os agendamentos
        const INCLUDE_AGENDA = true
        const doctor = await this.database.getDoctorById(id, INCLUDE_AGENDA);

    if(!doctor) {
        throw new Error('Nenhum médico encontrado');
    }

    return doctor;
    }

}