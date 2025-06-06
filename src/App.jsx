import { Button } from "./components";

function App() {
  const handleCancel = () => {
    console.log("Canceled");
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <>
      <div className="w-screen min-h-screen grid justify-center bg-slate-100 py-10">
        <div>
          <h1 className="font-semibold text-2xl text-center mb-3">
            React Button With TailwindCSS
          </h1>
          <div className="bg-white shadow-md rounded-md p-3 min-w-[500px] grid gap-3">
            <div className="flex gap-3">
              <Button onClick={handleCancel}>
                <em className="fas fa-arrow-left"></em>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>
                <em className="fas fa-floppy-disk"></em>
                Submit
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="PRIMARY">Primary</Button>
              <Button variant="SECONDARY">Secondary</Button>
              <Button variant="INFO">Info</Button>
              <Button variant="SUCCESS">Success</Button>
              <Button variant="WARNING">Warning</Button>
              <Button variant="DANGER">Danger</Button>
              <Button variant="LIGHT">Light</Button>
              <Button variant="DARK">Dark</Button>
            </div>
            <div className="flex gap-3 items-center">
              <Button variant="PRIMARY" size="SM">Primary SM</Button>
              <Button variant="SECONDARY">Secondary</Button>
              <Button variant="INFO" size="LG">Info LG</Button>
            </div>

             <div className="flex gap-3">
              <Button outline variant="PRIMARY">Primary</Button>
              <Button outline variant="SECONDARY">Secondary</Button>
              <Button outline variant="INFO">Info</Button>
              <Button outline variant="SUCCESS">Success</Button>
              <Button outline variant="WARNING">Warning</Button>
              <Button outline variant="DANGER">Danger</Button>
              <Button outline variant="LIGHT">Light</Button>
              <Button outline variant="DARK">Dark</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
