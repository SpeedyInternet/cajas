<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InvoicesController extends Controller
{
    public function getInvoice(Request $request)
    {
        // Simulación de los datos de la consulta
        $invoices = [
            [
                "TAXID" => 1802525079,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => "001005000154073",
                "OPENAMT" => 18.82,
                "GRANDTOTAL" => 18.82,
                "DATEINVOICED" => "2024-07-30 00:00:00.000",
                "EXPIRATIONDATE" => "2024-07-30 00:00:00.000",
                "PERIOD" => "2024-05",
                "PRODUCT" => "Otros",
                "C_INVOICE_ID" => 2237861,
                "C_BPARTNER_ID" => 1089070,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:26:56.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:27:32.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "16cf8f47-2e8e-464c-9d31-53eec602f03e1042869",
                "DATEINVOICEDFACT" => "2024-05-31 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "Y"
            ],
            [
                "TAXID" => 1802525079,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => "001005000154073",
                "OPENAMT" => 18.84,
                "GRANDTOTAL" => 18.84,
                "DATEINVOICED" => "2024-08-29 00:00:00.000",
                "EXPIRATIONDATE" => "2024-08-29 00:00:00.000",
                "PERIOD" => "2024-05",
                "PRODUCT" => "Otros",
                "C_INVOICE_ID" => 2237861,
                "C_BPARTNER_ID" => 1089070,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:26:56.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:27:32.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "16cf8f47-2e8e-464c-9d31-53eec602f03e1042870",
                "DATEINVOICEDFACT" => "2024-05-31 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "Y"
            ],
            [
                "TAXID" => 1802525079,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => 798634,
                "OPENAMT" => 34.99,
                "GRANDTOTAL" => 34.99,
                "DATEINVOICED" => "2024-07-01 00:00:00.000",
                "EXPIRATIONDATE" => "2024-07-01 00:00:00.000",
                "PERIOD" => "2024-07",
                "PRODUCT" => "ACCESO INTERNET GPON",
                "C_INVOICE_ID" => 2237865,
                "C_BPARTNER_ID" => 1089070,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:29:03.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:29:17.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "247748a9-cd37-4d3f-9910-dd650d084d13",
                "DATEINVOICEDFACT" => "2024-07-01 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "N"
            ],
            [
                "TAXID" => 1802525079,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => 798635,
                "OPENAMT" => 34.99,
                "GRANDTOTAL" => 34.99,
                "DATEINVOICED" => "2024-08-01 00:00:00.000",
                "EXPIRATIONDATE" => "2024-08-01 00:00:00.000",
                "PERIOD" => "2024-08",
                "PRODUCT" => "ACCESO INTERNET GPON",
                "C_INVOICE_ID" => 2237867,
                "C_BPARTNER_ID" => 1089070,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:29:28.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:29:42.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "3910dd14-6774-451f-ba82-8c7c600dabcb",
                "DATEINVOICEDFACT" => "2024-08-01 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "N"
            ],
            [
                "TAXID" => 1802525079,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => 798636,
                "OPENAMT" => 51,
                "GRANDTOTAL" => 51,
                "DATEINVOICED" => "2024-09-01 00:00:00.000",
                "EXPIRATIONDATE" => "2024-09-01 00:00:00.000",
                "PERIOD" => "2024-09",
                "PRODUCT" => "ACCESO INTERNET GPON",
                "C_INVOICE_ID" => 2237869,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "C_BPARTNER_ID" => 1089070,
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:29:48.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:29:55.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "59ceb6a7-3cfb-430e-8148-a46044e22032",
                "DATEINVOICEDFACT" => "2024-09-01 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "N"
            ],
            [
                "TAXID" => 1313401117,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => 798634,
                "OPENAMT" => 34.99,
                "GRANDTOTAL" => 34.99,
                "DATEINVOICED" => "2024-07-01 00:00:00.000",
                "EXPIRATIONDATE" => "2024-07-01 00:00:00.000",
                "PERIOD" => "2024-07",
                "PRODUCT" => "ACCESO INTERNET GPON",
                "C_INVOICE_ID" => 2237865,
                "C_BPARTNER_ID" => 1089070,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:29:03.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:29:17.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "247748a9-cd37-4d3f-9910-dd650d084d13",
                "DATEINVOICEDFACT" => "2024-07-01 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "N"
            ],
            [
                "TAXID" => 1313401117,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => 798635,
                "OPENAMT" => 34.99,
                "GRANDTOTAL" => 34.99,
                "DATEINVOICED" => "2024-08-01 00:00:00.000",
                "EXPIRATIONDATE" => "2024-08-01 00:00:00.000",
                "PERIOD" => "2024-08",
                "PRODUCT" => "ACCESO INTERNET GPON",
                "C_INVOICE_ID" => 2237867,
                "C_BPARTNER_ID" => 1089070,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:29:28.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:29:42.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "3910dd14-6774-451f-ba82-8c7c600dabcb",
                "DATEINVOICEDFACT" => "2024-08-01 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "N"
            ],
            [
                "TAXID" => 1313401117,
                "NAME" => "MASAQUIZA CHOLOTA EDWIN PATRICIO",
                "DOCUMENTNO" => 798636,
                "OPENAMT" => 51,
                "GRANDTOTAL" => 51,
                "DATEINVOICED" => "2024-09-01 00:00:00.000",
                "EXPIRATIONDATE" => "2024-09-01 00:00:00.000",
                "PERIOD" => "2024-09",
                "PRODUCT" => "ACCESO INTERNET GPON",
                "C_INVOICE_ID" => 2237869,
                "LOCALIZACION" => "AMBATO TUNGURAHUA",
                "C_BPARTNER_ID" => 1089070,
                "AD_CLIENT_ID" => 1000000,
                "AD_ORG_ID" => 1000000,
                "CREATED" => "2024-05-31 10:29:48.000",
                "CREATEDBY" => 1107506,
                "UPDATED" => "2024-05-31 10:29:55.000",
                "UPDATEDBY" => 1107506,
                "ISACTIVE" => "Y",
                "C_INVOICE_UU" => "59ceb6a7-3cfb-430e-8148-a46044e22032",
                "DATEINVOICEDFACT" => "2024-09-01 00:00:00.000",
                "ISPROGRAMA_PAGOS" => "N"
            ]
        ];
        
        $processedInvoices = [];
        $groupedInvoices = [];

        foreach ($invoices as $invoice) {
            $documentNo = $invoice['DOCUMENTNO'];
            if (!isset($groupedInvoices[$documentNo])) {
                $groupedInvoices[$documentNo] = [
                    'id' => $invoice['C_INVOICE_ID'],
                    'factura' => $documentNo,
                    'monto' => $invoice['OPENAMT'],
                    'localizacion' => $invoice['LOCALIZACION'],
                    'fecha' => explode(' ', $invoice['DATEINVOICED'])[0],
                    'producto' => explode(' ', $invoice['PRODUCT'])[0],
                    'totalCosto' => $invoice['GRANDTOTAL'],
                    'expanded' => true,
                    'deadTime' => -5, // Ajusta este valor según tus necesidades
                    'pagoIngresado' => '0.00',
                    'programaDePagos' => [],
                ];
            }

            if ($invoice['ISPROGRAMA_PAGOS'] === 'Y') {
                $groupedInvoices[$documentNo]['programaDePagos'][] = [
                    'id' => $invoice['C_INVOICE_ID'],
                    'fecha' => explode(' ', $invoice['DATEINVOICED'])[0],
                    'cantidad' => $invoice['OPENAMT'],
                    'localizacion' => $invoice['LOCALIZACION'],
                    'pagoIngresado' => '0.00',
                ];
            }
        }

        foreach ($groupedInvoices as $invoice) {
            $processedInvoices[] = $invoice;
        }

        return response()->json(['invoices' => $processedInvoices]);
    }
}