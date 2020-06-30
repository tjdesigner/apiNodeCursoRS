import Appointment from './../models/Appointments';
import Appointmentsrepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointService {
  private appointmentsRepository: Appointmentsrepository;

  constructor(appointmentsRepository: Appointmentsrepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({date, provider} :RequestDTO): Appointment {

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);

    if(findAppointmentInSameDate) {
      throw Error("This appointments is already booked");
    }

    const appointment = this.appointmentsRepository.create({
        provider,
        date: appointmentDate
    });

    return appointment;
  }
}

export default CreateAppointService;