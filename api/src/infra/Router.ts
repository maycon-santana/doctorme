import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import DoctorController from '@/application/controller/DoctorController';
import PatientController from '@/application/controller/PatientController';

export default class Router {
    app: express.Express;

    constructor(
        readonly doctorController: DoctorController,
        readonly patientController: PatientController
    ) {
        this.app = express();
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json()); 

        this.setRoutes();
    }

    private setRoutes() {
        // rotas da aplicação
        this.app.get('/', (req, res) => {
            res.send('Olá mundo');
        });
        this.app.post('/authenticate', this.patientController.authenticate);
        // Rotas para doctor
        this.app.get('/doctors', this.doctorController.listDoctor);
        
        // Rotas para paciente
        this.app.post('/patient', this.patientController.createPatient);
        this.app.post('/patient/:patientId/appointment', this.patientController.createAppointment);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Sevidor rodando na porta ${port}`);
            
        });
    }
}