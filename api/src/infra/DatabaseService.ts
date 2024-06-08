import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
    constructor(readonly connection: PrismaClient) {}

    listDoctor() {

        return this.connection.doctor.findMany();
    }

    getDoctorById(id: number, includeAgenda: boolean = false) {
        return this.connection.doctor.findUnique({
            where: { id },
            include: includeAgenda ? { agenda: true } : undefined,
        });
    }

    getPatientByPhone(phone: string, includeAppointment: boolean = false) {
        return this.connection.patient.findUnique({
            where: { phone },
            include: {
                appointment: includeAppointment,
            },
        });
    }
    
    createUser(phone: string, password: string) {
        return this.connection.user.create({
            data: {
                phone,
                password,
            },
        });
    }

    createPatient(name: string, phone: string, userId: number) {
        return this.connection.patient.create({
            data: {
                name,
                phone,
                userId,
            },
        });
    }
}

export const database = new DatabaseService(new PrismaClient());