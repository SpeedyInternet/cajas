<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BankAccountController extends Controller
{
    public function getBankAccounts()
    {
        $bankAccounts = DB::select("
            SELECT cb2.C_BANKACCOUNT_ID, cb2.NAME
            FROM C_BANK cb
            INNER JOIN C_BANKACCOUNT cb2 ON cb2.C_BANK_ID = cb.C_BANK_ID
            WHERE cb2.BANKACCOUNTTYPE = 'B' AND CB2.ACCOUNTNO = '1'
        ");

        return response()->json(['bankAccounts' => $bankAccounts]);
        // return Inertia::render('Dashboard', [
        //     'bankAccounts' => $bankAccounts
        // ]);
    }
}
