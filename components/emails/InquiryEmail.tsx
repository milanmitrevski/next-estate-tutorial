import { formatPrice } from '@/app/property/[propertyId]/page';

interface InquiryEmailProps {
  senderEmail: string;
  senderName: string;
  senderPhone: string;
  ownerName: string;
  message: string;
  propertyTitle: string;
  propertyPrice: string;
}

export default function RealEstateInquiryEmail({
  senderEmail,
  senderPhone,
  senderName,
  ownerName,
  message,
  propertyPrice,
  propertyTitle,
}: InquiryEmailProps) {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-100 px-6 py-5">
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-1 text-sm text-gray-500">
          Send an inquiry about this property.
        </p>
      </div>

      <div className="p-6">
        {/* Recipient */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-700">
            {ownerName}
          </div>

          <div>
            <p className="font-semibold text-gray-900"> {senderName}</p>
            <p className="text-sm text-gray-500"> {senderPhone}</p>
            <p className="text-sm text-gray-500"> {senderEmail}</p>
          </div>
        </div>

        {/* Property Preview */}
        <div className="mb-6 flex gap-4 rounded-xl bg-gray-50 p-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Property inquiry
            </p>
            <h3 className="mt-1 font-semibold text-gray-900">
              {propertyTitle}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {formatPrice(propertyPrice)}
            </p>
            <p className="mt-2 font-semibold text-blue-600"> {message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
