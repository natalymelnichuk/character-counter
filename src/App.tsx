

import { CharacterCounter } from './components/CharacterCounter';


function App() {

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Character Counter
            </h1>
            <CharacterCounter minWords={25} maxWords={100} />
        </div>
    );
}

export default App;