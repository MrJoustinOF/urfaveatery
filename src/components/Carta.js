import Form from "./Form";

function Carta() {
  return (
    <div className="mt-36">
      <h2 className="text-center text-3xl font-bold">Nuesta Carta</h2>
      <div className="block sm:grid grid-cols-3">
        <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
          {/* Ceviche */}
          <img src="https://i.ibb.co/RT9Xj1D/xd.png" className="w-64 h-48 " />
          <h2 className="mt-8 text-2xl font-semibold">Ceviche</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus lacinia justo, sit amet tincidunt enim dignissim non. Aenean
            arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
            Suspendisse placerat, ex in iaculis luctus, eros mauris euismod est,
            id fringilla lacus ante in ipsum. Sed ut euismod lorem, aliquam
            imperdiet nulla. Praesent egestas purus rhoncus bibendum molestie.
          </p>
        </div>

        {/* Encebollado */}
        <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
          <img src="https://i.ibb.co/T1pQ5cM/xd.png" className="w-64 h-48" />
          <h2 className="mt-8 text-2xl font-semibold">Encebollado</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus lacinia justo, sit amet tincidunt enim dignissim non. Aenean
            arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
            Suspendisse placerat, ex in iaculis luctus, eros mauris euismod est,
            id fringilla lacus ante in ipsum. Sed ut euismod lorem, aliquam
            imperdiet nulla. Praesent egestas purus rhoncus bibendum molestie.
          </p>
        </div>

        {/* Pescado Apanado */}
        <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
          <img src="https://i.ibb.co/tx71XWv/xd.png" className="w-64 h-48" />
          <h2 className="mt-8 text-2xl font-semibold">Pescado Apanado</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus lacinia justo, sit amet tincidunt enim dignissim non. Aenean
            arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
            Suspendisse placerat, ex in iaculis luctus, eros mauris euismod est,
            id fringilla lacus ante in ipsum. Sed ut euismod lorem, aliquam
            imperdiet nulla. Praesent egestas purus rhoncus bibendum molestie.
          </p>
        </div>

        {/* Guatita */}
        <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
          <img src="https://i.ibb.co/GxTkXvj/xd.png" className="w-64 h-48 " />
          <h2 className="mt-8 text-2xl font-semibold">Guatita</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus lacinia justo, sit amet tincidunt enim dignissim non. Aenean
            arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
            Suspendisse placerat, ex in iaculis luctus, eros mauris euismod est,
            id fringilla lacus ante in ipsum. Sed ut euismod lorem, aliquam
            imperdiet nulla. Praesent egestas purus rhoncus bibendum molestie.
          </p>
        </div>

        {/* Asado de Pescado */}
        <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
          <img src="https://i.ibb.co/RjX98HZ/xd.png" className="w-64 h-48 " />
          <h2 className="mt-8 text-2xl font-semibold">Asado de Pescado</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus lacinia justo, sit amet tincidunt enim dignissim non. Aenean
            arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
            Suspendisse placerat, ex in iaculis luctus, eros mauris euismod est,
            id fringilla lacus ante in ipsum. Sed ut euismod lorem, aliquam
            imperdiet nulla. Praesent egestas purus rhoncus bibendum molestie.
          </p>
        </div>

        {/* Camarones Apanados */}
        <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
          <img src="https://i.ibb.co/5hnQCc2/xd.png" className="w-64 h-48 " />
          <h2 className="mt-8 text-2xl font-semibold">Camarones Apanados</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus lacinia justo, sit amet tincidunt enim dignissim non. Aenean
            arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
            Suspendisse placerat, ex in iaculis luctus, eros mauris euismod est,
            id fringilla lacus ante in ipsum. Sed ut euismod lorem, aliquam
            imperdiet nulla. Praesent egestas purus rhoncus bibendum molestie.
          </p>
        </div>
      </div>

      <Form></Form>
    </div>
  );
}

export default Carta;
