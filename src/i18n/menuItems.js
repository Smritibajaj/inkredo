export const menuItems = {
    "data": [
        {
            "name": "Introduction",
            "url": "/#introduction"
        },
        {
            "name": "Authentication",
            "url": "/#authentication"
        },
        {
            "name": "Bank statement analysis",
            "url": "/#bank-statement-analysis",
            "children": [
                {
                    "name": "Create borrower",
                    "url": "/#create-borrower"
                },
                {
                    "name": "Supported banks",
                    "url": "/#supported-banks"
                },
                {
                    "name": "Parser v1",
                    "url": "/#parser-v1"
                },
                {
                    "name": "Parser v2",
                    "url": "/#parser-v2"
                },
                {
                    "name": "Reanalyse bank statement",
                    "url": "/#reanalyse-bank-statement"
                },
                {
                    "name": "Generate excel report link",
                    "url": "/#generate-excel-report-link"
                },
                {
                    "name": "Extract PII",
                    "url": "/#extract-pii"
                }
            ]
        },
        {
            "name": "Error",
            "url": "/#errors"
        }
    ]
}


export const borrower = {
    "banks": [
        {
            "code": "HDFC",
            "displayName": "HDFC Bank",
            "support": {
                "csv": true,
                "excel": true,
                "pdf": true
            }
        },
        {
            "code": "ICICI",
            "displayName": "ICICI Bank",
            "support": {
                "csv": false,
                "excel": false,
                "pdf": true
            }
        },
    ]
}

export const create = {"success": true, "message": "Borrower created successfully", "borrowerId": "5bb36bc3e38eb85f7207461d" 
}