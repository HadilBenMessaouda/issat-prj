// schedule.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service'; // Import PdfService
import { EmploiService } from './emploi.service';
import { CreateEmploiDto } from './dto/create-emploi.dto';
import { UpdateEmploiDto } from './dto/update-emploi.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('emploi')
@UseGuards(JwtAuthGuard,RolesGuard)
export class EmploiController {
  constructor(
    private readonly emploiService: EmploiService,
    private readonly pdfService: PdfService, // Inject PdfService
  ) {}

  @Post()
  @Roles(Role.Admin_Hor)
  async uploadEmploi(@Body() createEmploiDto: CreateEmploiDto) {
    const { fileName, filePath } = createEmploiDto;
    return this.emploiService.upload(fileName, filePath);
  }

  @Patch(':id')
  @Roles(Role.Admin_Hor)
  async editEmploi(@Param('id') id: string, @Body() updateEmploiDto: UpdateEmploiDto) {
    const updates = updateEmploiDto;
    return this.emploiService.edit(parseInt(id, 10), updates);
  }

  @Get()
  @Roles(Role.Admin_Hor)
  async getAllEmplois() {
    return this.emploiService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin_Hor)
  async getEmploiById(@Param('id') id: string) {
    return this.emploiService.findById(parseInt(id, 10));
  }

  @Delete(':id')
  @Roles(Role.Admin_Hor)
  async deleteEmploi(@Param('id') id: string) {
    return this.emploiService.delete(parseInt(id, 10));
  }

  @Get(':id/pdf')
  @Roles(Role.Admin_Hor)
  async generatePdf(@Param('id') id: string, @Res() res: Response) {
    const emploi = await this.emploiService.findById(parseInt(id, 10));
    if (!emploi) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    const filePath = await this.pdfService.generatePdf(emploi);

    res.setHeader('Content-Type', 'application/pdf');
    res.download(filePath, `schedule_${id}.pdf`, (err) => {
      if (err) {
        console.error('Error downloading PDF:', err);
        res.status(500).json({ message: 'Failed to download PDF' });
      }
    });
  }
}
