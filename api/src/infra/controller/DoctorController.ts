import { Request, Response } from "express";
import { database } from "@/infra/DatabaseService";
import DoctorController from "@/application/controller/DoctorController";
import ListDoctorUseCase from "@/application/useCases/doctor/ListDoctor";

export default class DoctorControllerImpl implements DoctorController {
    async listDoctor(req: Request, res: Response) {
        // lógica de buscar no banco de dados
        const useCase = new ListDoctorUseCase(database);
        const doctors = await useCase.execute();

        res.status(200).json(doctors);
    }
}