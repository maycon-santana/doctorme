import Router from '@/infra/Router'
import DoctorController from '@/infra/controller/DoctorController';

const doctorController = new DoctorController();

const app = new Router(doctorController);

export default app;