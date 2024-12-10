import { Accordion } from "./components/Accordion";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Tooltip } from "./components/Tooltip";
import { Typography } from "./components/Typography";

const App = () => {
  return (
    <div>
      <div className="group">
        <Button variant="primary" size="sm">
          Primary, sm
        </Button>
        <Button variant="primary" size="md">
          Primary, md
        </Button>
        <Button variant="primary" size="lg">
          Primary, lg
        </Button>

        <Button variant="bordered" size="sm">
          Bordered, sm
        </Button>
        <Button variant="bordered" size="md">
          Bordered, md
        </Button>
        <Button variant="bordered" size="lg">
          Bordered, lg
        </Button>
      </div>
      {/* <div className="group">
        <Input placeholder="Search" />
        <Input placeholder="Search" label="Name" />
        <Input placeholder="Search" label="Name" disabled />
        <Input placeholder="Search" label="Name" danger />
      </div>
      <div className="group-col">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>
      <div className="group-col">
        <Typography textSize="sm">
          В английском языке одинаково звучащие слова могут относиться к разным
          частям речи и иметь различные значения. Артикли – это особые частицы,
          которые используются с существительными и помогают отличать их от
          глаголов, прилагательных и других частей речи. Так как в русском языке
          нет аналога артикля, его можно воспринимать как единое целое вместе с
          существительным.
        </Typography>
        <Typography textSize="md">
          В английском языке одинаково звучащие слова могут относиться к разным
          частям речи и иметь различные значения. Артикли – это особые частицы,
          которые используются с существительными и помогают отличать их от
          глаголов, прилагательных и других частей речи. Так как в русском языке
          нет аналога артикля, его можно воспринимать как единое целое вместе с
          существительным.
        </Typography>
        <Typography textSize="lg">
          В английском языке одинаково звучащие слова могут относиться к разным
          частям речи и иметь различные значения. Артикли – это особые частицы,
          которые используются с существительными и помогают отличать их от
          глаголов, прилагательных и других частей речи. Так как в русском языке
          нет аналога артикля, его можно воспринимать как единое целое вместе с
          существительным.
        </Typography>
      </div>
      <div className="group-col">
        <Tooltip text="Tooltip text" position="top">
          Tooltip top
        </Tooltip>
        <Tooltip text="Tooltip text" position="right">
          Tooltip right
        </Tooltip>
        <Tooltip text="Tooltip text" position="bottom">
          Tooltip bottom
        </Tooltip>
        <Tooltip text="Tooltip text" position="left">
          Tooltip left
        </Tooltip>
      </div>
      <div className="group-col">
        <Accordion title="Accordion title 1">
          <p>Accordion content 1</p>
        </Accordion>
        <Accordion title="Accordion title 2" defaultOpen>
          <p>Accordion content 2</p>
        </Accordion>
      </div> */}
    </div>
  );
};

export default App;
