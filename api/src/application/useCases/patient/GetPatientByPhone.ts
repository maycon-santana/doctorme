import DatabaseService from "@/infra/DatabaseService";

export default class GetPatientByPhoneUseCase {
    constructor(readonly database: DatabaseService) {}

    async execute(phone: string) {
        // Incluir os agendamentos
        const INCLUDE_APPOINTMENT = true
        const patient = await this.database.getPatientByPhone(
            phone, 
            INCLUDE_APPOINTMENT
        );

    if(!patient) {
        throw new Error('Nenhum paciente encontrado');
    }

    return patient;
    }
    
}