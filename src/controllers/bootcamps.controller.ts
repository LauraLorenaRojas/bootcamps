import { Controller, Get, Param } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

@Get()
getALLBootcamps(): string {
return "Aqui van a mostrarse todos los bootcamps"
}
@Get(':id')
getALLBootcampBYid(@Param('id') id: number): string {
  return `Aquí van a mostrar el boot: ${id}`;
}
}