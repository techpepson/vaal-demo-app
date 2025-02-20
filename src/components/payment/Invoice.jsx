import { 
  DocumentTextIcon, 
  PrinterIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const Invoice = ({ data, type }) => {
  const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
  const date = new Date().toLocaleDateString();

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            RealEstate.AI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            123 Business Street
            <br />
            New York, NY 10001
            <br />
            contact@realestate.ai
          </p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-semibold text-primary-600">
            {type === 'buy' ? 'Purchase Invoice' : 'Rental Agreement Invoice'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Invoice #: {invoiceNumber}
            <br />
            Date: {date}
          </p>
        </div>
      </div>

      {/* Client Info */}
      <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-8">
        <h3 className="text-gray-600 dark:text-gray-400 mb-2">Bill To:</h3>
        <p className="text-gray-900 dark:text-white">
          {data.name}
          <br />
          {data.email}
          <br />
          {data.phone}
        </p>
      </div>

      {/* Property Details */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Property Details
        </h3>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Address:</p>
              <p className="text-gray-900 dark:text-white">{data.property.location}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Property Type:</p>
              <p className="text-gray-900 dark:text-white">{data.property.type}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Cost Breakdown
        </h3>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-2">Description</th>
              <th className="text-right py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {type === 'buy' ? (
              <>
                <tr>
                  <td className="py-2">Property Purchase Price</td>
                  <td className="text-right">${data.property.price.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-2">Down Payment</td>
                  <td className="text-right">${data.downPayment.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-2">Processing Fee</td>
                  <td className="text-right">${(data.property.price * 0.01).toLocaleString()}</td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td className="py-2">Monthly Rent</td>
                  <td className="text-right">${data.property.rentPrice.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-2">Security Deposit</td>
                  <td className="text-right">${data.downPayment.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-2">Application Fee</td>
                  <td className="text-right">$50</td>
                </tr>
              </>
            )}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2 font-semibold">Total Due</td>
              <td className="text-right font-semibold">
                ${type === 'buy' 
                  ? (data.downPayment + (data.property.price * 0.01)).toLocaleString()
                  : (data.downPayment + data.property.rentPrice + 50).toLocaleString()
                }
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Terms */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Terms & Conditions
        </h3>
        <div className="text-gray-600 dark:text-gray-300 text-sm">
          {type === 'buy' ? (
            <p>
              This invoice represents the initial payment required for the property purchase.
              The remaining balance must be paid through the specified financing method within
              30 days of this agreement.
            </p>
          ) : (
            <p>
              First month's rent and security deposit must be paid before move-in date.
              Monthly rent is due on the 1st of each month. Late payments will incur a 5% fee.
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button 
          onClick={() => window.print()}
          className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <PrinterIcon className="w-5 h-5 mr-2" />
          Print
        </button>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice; 