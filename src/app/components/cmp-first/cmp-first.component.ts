import { Component, OnInit } from '@angular/core';

interface Day {
  day: number;
  belongsToCurrentMonth: boolean;
  events?: Evento[]; // Agrega esta propiedad
}

interface Evento {
  name: string;
  date: Date;
  isMultiDay: boolean;
  duration?: number; // Si isMultiDay es true, se espera que duration tenga un valor
  startTime?: string; // Hora de inicio (opcional)
  durationHours?: number; // Duración en horas (opcional)
}

@Component({
  selector: 'app-cmp-first',
  templateUrl: './cmp-first.component.html',
  styleUrls: ['./cmp-first.component.css']
})
export class CmpFirstComponent implements OnInit {
  days: Day[] = []; // Usa la interfaz Day
  daysOfWeek: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  currentDay: Date = new Date();
  currentMonth: number = this.currentDay.getMonth();
  currentYear: number = this.currentDay.getFullYear();

  //eventos por dia
  events: Evento[] = [
    { name: 'Evento1', date: new Date(2023, 10, 8), isMultiDay: false , startTime: '8:00', durationHours: 999 },
    { name: 'Evento2', date: new Date(2023, 10, 15), isMultiDay: false, startTime: '12:00', durationHours: 2  },
    { name: 'Evento3', date: new Date(2023, 10, 8), isMultiDay: true, duration: 3, startTime: '10:00', durationHours: 2 },
    // Agrega más eventos según sea necesario
  ];

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.days = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const numberOfDays = lastDay.getDate();
    const startingDay = firstDay.getDay();

    // Obtener el último día del mes anterior
    const lastDayOfPreviousMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

    // Rellenar los días iniciales con los días del mes anterior
    for (let i = startingDay - 1; i >= 0; i--) {
      this.days.push({ day: lastDayOfPreviousMonth - i, belongsToCurrentMonth: false });
    }

    // Rellenar los días del mes actual
    for (let i = 1; i <= numberOfDays; i++) {
      const currentDate = new Date(this.currentYear, this.currentMonth, i);
      const eventsForDay = this.getEventsForDay(currentDate);
      this.days.push({ day: i, belongsToCurrentMonth: true, events: eventsForDay });
    }

    // Rellenar los días finales con los días del mes siguiente
    const remainingDays = 42 - this.days.length; // 6 filas * 7 días por fila
    for (let i = 1; i <= remainingDays; i++) {
      this.days.push({ day: i, belongsToCurrentMonth: false });
    }
  }

  getMonthName(month: number): string {
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return monthNames[month];
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }

  //obtener eventos de cada dia
  getEventsForDay(date: Date): Evento[] {
    return this.events.filter(event => {
      if (event.isMultiDay) {
        const eventStartDate = event.date;
        const eventEndDate = new Date(eventStartDate);
        eventEndDate.setDate(eventEndDate.getDate() + (event.duration || 0) - 1); // Calcular la fecha de fin
        return date >= eventStartDate && date <= eventEndDate;
      } else {
        return date.getTime() === event.date.getTime();
      }
    });
  }
}
