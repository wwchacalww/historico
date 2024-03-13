import PDFKit from "pdfkit";
import { Response } from "express";
import { subjectsFGB, subjectsIF} from "./label"


export class DiaryPDFUsecase {
  async execute(response: Response):Promise<Response> {
    
    const pdf = new PDFKit({ size: "A4", margin: 10, layout: "portrait" });
    pdf.image('./src/assets/logo.png', 25, 12, {width: 62})
    pdf.y = 10
    pdf.fontSize(11);
    pdf.font("Times-Bold");
    pdf.text("GDF – SECRETARIA DE ESTADO DE EDUCAÇÃO DO DISTRITO FEDERAL", { align: "center", lineGap: 4})
    pdf.text("CENTRO DE ENSINO MÉDIO 304 DE SAMAMBAIA", { align: "center"})
    pdf.font("Times-Roman");
    let txt = "CRE - SAMAMBAIA "
    pdf.text(txt, { align: "center"})
    txt = "PORTARIA Nº 03 DE 12/01/2004-SEDF"
    pdf.text(txt, { align: "center"})
    txt = "QN 304 Conjunto 4 - Samambaia Sul (Samambaia) - DF"
    pdf.text(txt, { align: "center", lineGap: 3})
    pdf.font("Times-Bold");
    pdf.fontSize(13);
    txt = "HISTÓRICO ESCOLAR - ENSINO MÉDIO"
    pdf.text(txt, { align: "center"})

    pdf.rect(10, 95, 575, 85).stroke()
    pdf.font("Times-Bold");
    pdf.fontSize(10);
    pdf.y = 100
    txt = "FUNDAMENTAÇÃO LEGAL DO CURSO"
    pdf.text(txt, { align: "center", lineGap: 3})
    pdf.font("Times-Roman");
    pdf.fontSize(9);
    txt = "Lei n.º 9394/96; Lei nº 13.415 de 2017 Parecer CNE/CEB n.º 3/2018; Resolução CNE/CEB n.º 3/2018; Portaria MEC nº 649/201R8esolução n.º 2/2020 – CEDF, com alterações dadas pela Resolução nº 1/2021-CEDF, publicada no DODF nº 30, de 12 de fevereirode 2021, pela Resolução nº 2/2021-CEDF, publicada no DODF n.º 126, de 7 de julho de 2021, e pela Resolução n.º 3/2021-CEDFp, ublicada no DODF nº 158, de 20 de agosto de 2021. Portaria nº 1.094/SEEDF, de 16 de novembro de 2022, publicada no DODF n.º 214, de 17 de novembro de 2022 e Parecer n.º 210/2022-CEDF, de 8 de novembro de 2022, que valida o Plano de Implementação do Novo Ensino Médio da Rede Pública deEnsino do Distrito Federal, incluindo o Quadro-Resumo da Matriz Curricular."
    pdf.text(txt, 20, pdf.y, { align: "justify", width: 555})

    pdf.font("Times-Bold");
    pdf.fontSize(10);
    pdf.rect(10, 180, 435, 13).stroke()
    pdf.rect(445, 180, 140, 13).stroke()

    pdf.y = 183
    txt = "Estudante:"+" GEOVANNA DIAS MENDES"
    pdf.text(txt, 15, pdf.y, {align: "left", lineGap: 3})
    txt = "RA: "+"000120029017-3/DF"
    pdf.text(txt, 450, 183, {align: "left", lineGap: 3})

    pdf.font("Times-Roman");
    let y = pdf.y
    pdf.rect(10, 193, 135, 14).stroke()
    pdf.rect(145, 193, 60, 14).stroke()
    pdf.rect(205, 193, 130, 14).stroke()
    pdf.rect(335, 193, 250, 14).stroke()

    pdf.rect(10, 207, 287.5, 14).stroke()
    pdf.rect(297.5, 207, 287.5, 14).stroke()

    pdf.rect(10, 221, 575, 14).stroke()

    pdf.rect(10, 235, 170, 28).stroke()
    pdf.rect(180, 235, 135, 14).stroke()
    pdf.rect(315, 235, 135, 14).stroke()
    pdf.rect(450, 235, 135, 14).stroke()

    for (let i=0; i <=8 ; i++) {
      const xis = 180 + (i * 45)
      pdf.rect(xis, 249, 45, 14).stroke()
    }
    pdf.rect(10, 263, 170, 14).stroke()
    pdf.rect(180, 263, 405, 14).stroke()
    for (let i=0; i <= 11; i++) {
      const alt = 277 + (i * 14)
      pdf.rect(10, alt, 170, 14).stroke()
      for (let j=0; j <=8 ; j++) {
        const xis = 180 + (j * 45)
        pdf.rect(xis, alt, 45, 14).stroke()
      }
    }
    pdf.rect(10, 445, 170, 14).stroke()
    pdf.rect(180, 445, 405, 14).stroke()
    for (let i=0; i <= 7; i++) {
      const alt = 459 + (i * 14)
      pdf.rect(10, alt, 170, 14).stroke()
      for (let j=0; j <=8 ; j++) {
        const xis = 180 + (j * 45)
        pdf.rect(xis, alt, 45, 14).stroke()
      }
    }

    txt = "Data Nasc.:  "+"30/11/2004"
    pdf.x = 15
    pdf.text(txt, {align: "left", lineGap: 3})
    txt = "Sexo:   "+"F"
    pdf.text(txt, 150, y, {align: "left", lineGap: 3})
    txt = "Nacionalidade: Brasileira"
    pdf.text(txt, 210, y, {align: "left", lineGap: 3})
    txt = "Naturalidade: "+"Brasília-DF"
    pdf.text(txt, 340, y, {align: "left", lineGap: 3})
    y = pdf.y
    pdf.x = 15
    txt = "Carteira de Identidade: "+"4.117.663 SSP-DF"
    pdf.text(txt, {align: "left", lineGap: 3})
    txt = "CPF:  "+"058.811.811-74"
    pdf.text(txt, 302, y,{align: "left", lineGap: 3})
    pdf.x = 15
    txt = "Filiação:  "+"CINTIA DIAS MENDES; "+"EDUARDO MENDES FERREIRA"
    pdf.text(txt, {align: "left", lineGap: 3})

    pdf.font("Times-Bold")
    pdf.fontSize(11);
    txt = "COMPONENTES/UNIDADES CURRICULARES"
    pdf.text(txt, { width: 170, align: "center"})
    txt = "1ª SÉRIE"
    pdf.text(txt, 180, 239, { width: 135, align: "center"})
    txt = "2ª SÉRIE"
    pdf.text(txt, 315, 239, { width: 135, align: "center"})
    txt = "3ª SÉRIE"
    pdf.text(txt, 450, 239, { width: 135, align: "center"})
    for (let i=0; i <=8 ; i++) {
      const xis = 180 + (i * 45)
      if ( i % 3 == 0) { txt = "M/C/N"}
      if ( i % 3 == 1) { txt = "CH"}
      if ( i % 3 == 2) { txt = "FALTAS"}
      pdf.fontSize(10);
      pdf.text(txt,xis, 253, {width: 45, align: "center"})
    }
    txt="Formação Geral Básica - FGB"
    pdf.text(txt, 10, 267, {width: 170, align: "center"})
    pdf.font("Times-Roman")
    pdf.fontSize(9);
    subjectsFGB.forEach( (sjb, ind) => {
      const alt = 281 + (ind * 14)
      pdf.text(sjb.subject, 13, alt, {width: 170, align: "left"})
      pdf.text( sjb.ch.toString(), 225, alt, { width: 45, align: "center"} )
      pdf.text( "0", 270, alt, { width: 45, align: "center"} )
      pdf.text( sjb.ch.toString(), 360, alt, { width: 45, align: "center"} )
      pdf.text( sjb.ch.toString(), 495, alt, { width: 45, align: "center"} )
    })

    pdf.font("Times-Bold")
    pdf.fontSize(11);
    txt = "Itinerários Formativos - IF"
    pdf.text(txt, 10, 449, {width: 170, align: "center"})
    pdf.font("Times-Roman")
    pdf.fontSize(9);

    subjectsIF.forEach( (sjb, ind) => {
      const alt = 463 + (ind * 14)
      pdf.text(sjb.subject, 13, alt, {width: 170, align: "left"})
      if(ind == 6) {
        pdf.text( sjb.ch.toString(), 225, alt, { width: 45, align: "center"} )
        pdf.text( "0", 270, alt, { width: 45, align: "center"} )
        let xis = 270 +45
        pdf.text( "---", xis, alt, { width: 45, align: "center"} ) 
        xis += 45
        pdf.text( "---", xis, alt, { width: 45, align: "center"} )
        xis += 45
        pdf.text( "---", xis, alt, { width: 45, align: "center"} )
        xis += 45
        pdf.text( "---", xis, alt, { width: 45, align: "center"} )
        xis += 45
        pdf.text( "---", xis, alt, { width: 45, align: "center"} )
        xis += 45
        pdf.text( "---", xis, alt, { width: 45, align: "center"} )
      }else if(ind == 7) {
        pdf.text( "---", 180, alt, { width: 45, align: "center"} )
        pdf.text( "---", 225, alt, { width: 45, align: "center"} )
        pdf.text( "---", 270, alt, { width: 45, align: "center"} )
        pdf.text( sjb.ch.toString(), 360, alt, { width: 45, align: "center"} )
        pdf.text( sjb.ch.toString(), 495, alt, { width: 45, align: "center"} )
      } else {
        pdf.text( sjb.ch.toString(), 225, alt, { width: 45, align: "center"} )
        pdf.text( "0", 270, alt, { width: 45, align: "center"} )
        pdf.text( sjb.ch.toString(), 360, alt, { width: 45, align: "center"} )
        pdf.text( sjb.ch.toString(), 495, alt, { width: 45, align: "center"} )
      }
    })
    // pdf.rect(10, 10, 575, 800).fillOpacity(0).fillAndStroke("#000", "#000");
    pdf.end()
    pdf.pipe(response)
    return response
  }
}