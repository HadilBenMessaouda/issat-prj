// pdf.service.ts
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { Emploi } from './entities/emploi.entity';

@Injectable()
export class PdfService {
  async generatePdf(emploiData: Emploi): Promise<string> {
    const doc = new PDFDocument();
    const fileName = `schedule_${Date.now()}.pdf`;
    const filePath = `./pdfs/${fileName}`;
    const writeStream = fs.createWriteStream(filePath);

    doc.pipe(writeStream);

    // Generate PDF content based on scheduleData
    doc.text(`Schedule Details:\n\n`);
    doc.text(`ID: ${emploiData.id}\n`);
    doc.text(`File Name: ${emploiData.fileName}\n`);
    doc.text(`File Path: ${emploiData.filePath}\n`);

    doc.end();

    return filePath;
  }
}
