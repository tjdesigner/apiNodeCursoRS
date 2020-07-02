import Appointment from './../models/Appointments';
import Appointmentsrepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointService {

  public async execute({date, provider} :Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(Appointmentsrepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

    if(findAppointmentInSameDate) {
      throw Error("This appointments is already booked");
    }

    const appointment = appointmentsRepository.create({
        provider,
        date: appointmentDate
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointService;