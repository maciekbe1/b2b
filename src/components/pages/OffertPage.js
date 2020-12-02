import React from "react";

export default function OffertPage() {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="pt-6">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-7/12 ml-auto mr-auto px-4">
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Oferujemy idealne rozwiązania, przeznaczone do izolacji budynków
              mieszkalnych, biurowych, obiektów przemysłowych i
              handlowo-usługowych oraz pomieszczeń gospodarczych. Innowacyjne
              systemy ociepleń pianą PUR mogą być stosowane do wykonywania
              izolacji termicznej zarówno w budynkach nowo wznoszonych, jak i
              tych, podlegających termomodernizacji Gwarancja producenta 25 lat
              na pianę
            </p>
          </div>
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mn:pt-2">
            <h5 className="text-center">Zapraszamy do współpracy!</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
