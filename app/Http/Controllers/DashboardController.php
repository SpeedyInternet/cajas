<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\InvoicesController;
use App\Http\Controllers\BankAccountController;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        // Llama a los métodos de los otros controladores
        $bankAccountController = new BankAccountController();
        $invoiceController = new InvoicesController();

        $bankAccounts = $bankAccountController->getBankAccounts();
        $invoices = $invoiceController->getInvoice($request);

        // echo $invoices;
        // Renderiza la vista de Inertia con los datos obtenidos
        return Inertia::render('Dashboard', [
            'bankAccounts' => $bankAccounts,
            'invoices' => $invoices,
        ]);
    }
}
