import Button from "./Button";
import { GoBell, GoSmiley, GoListUnordered } from "react-icons/go";

function App() {
  return (
    <div className="columns-3">
      <div>
        <div>
          <Button primary>
            <GoBell />
            Click Me!
          </Button>
        </div>
        <div>
          <Button secondary>
            <GoSmiley />
            Buy Now!
          </Button>
        </div>
        <div>
          <Button success>
            <GoListUnordered />
            See Deals!
          </Button>
        </div>
        <div>
          <Button warning>Hide Ads!</Button>
        </div>
        <div>
          <Button danger>Something!</Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary rounded>
            Click Me!
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Buy Now!
          </Button>
        </div>
        <div>
          <Button success rounded>
            See Deals!
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Hide Ads!
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Something!
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary outline>
            Click Me!
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Buy Now!
          </Button>
        </div>
        <div>
          <Button success outline>
            See Deals!
          </Button>
        </div>
        <div>
          <Button warning outline>
            Hide Ads!
          </Button>
        </div>
        <div>
          <Button danger outline>
            Something!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
