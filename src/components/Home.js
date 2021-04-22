import Form from "./Form";

function Home() {
  return (
    <div>
      <div className="block sm:flex justify-around items-center py-2 px-6 mt-32">
        <img
          src="https://i.ibb.co/GxTkXvj/xd.png"
          className=" sm:w-2/5 sm:h-2/5"
        />
        <div>
          <h2 className="text-4xl mb-8 font-semibold ">
            Tus comidas favoritas a un solo click
          </h2>
          <a
            href="#carta-min"
            className="bg-green-700 hover:bg-green-600 px-4 py-4 rounded text-white font-bold"
          >
            Ver carta
          </a>
        </div>
      </div>

      <div id="carta-min" className="mt-36">
        <h2 className="text-center text-3xl font-semibold">
          Nuestros platos principales
        </h2>
        <div className="block sm:flex justify-evenly">
          <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
            <img src="https://i.ibb.co/RT9Xj1D/xd.png" className="w-64 h-48 " />
            <h2 className="mt-8 text-2xl font-semibold">Ceviche</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus lacinia justo, sit amet tincidunt enim dignissim non.
              Aenean arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
              Suspendisse placerat, ex in iaculis luctus, eros mauris euismod
              est, id fringilla lacus ante in ipsum. Sed ut euismod lorem,
              aliquam imperdiet nulla. Praesent egestas purus rhoncus bibendum
              molestie.
            </p>
          </div>

          <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
            <img src="https://i.ibb.co/T1pQ5cM/xd.png" className="w-64 h-48" />
            <h2 className="mt-8 text-2xl font-semibold">Encebollado</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus lacinia justo, sit amet tincidunt enim dignissim non.
              Aenean arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
              Suspendisse placerat, ex in iaculis luctus, eros mauris euismod
              est, id fringilla lacus ante in ipsum. Sed ut euismod lorem,
              aliquam imperdiet nulla. Praesent egestas purus rhoncus bibendum
              molestie.
            </p>
          </div>

          <div className="w-64 border border-black text-center rounded-2xl mt-8 mx-auto my-0">
            <img src="https://i.ibb.co/tx71XWv/xd.png" className="w-64 h-48" />
            <h2 className="mt-8 text-2xl font-semibold">Pescado Apanado</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus lacinia justo, sit amet tincidunt enim dignissim non.
              Aenean arcu urna, pulvinar et lorem vel, cursus scelerisque leo.
              Suspendisse placerat, ex in iaculis luctus, eros mauris euismod
              est, id fringilla lacus ante in ipsum. Sed ut euismod lorem,
              aliquam imperdiet nulla. Praesent egestas purus rhoncus bibendum
              molestie.
            </p>
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold mt-8">
          Para ver todos nuestros platos ve a la seccion de Carta
        </h2>
      </div>

      <Form></Form>
    </div>
  );
}

export default Home;
