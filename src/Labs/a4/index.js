import Add from "./add";
import ClickEvent from "./clickEvent";
import Counter from "./counter";
import EventObject from "./eventObject";
import PassingDataOnEvent from "./passingDataOnEvent";
import PassingFunctions from "./passingFunctions";
import BooleanStateVariables from "./booleanStateVariables";
import StringStateVariables from "./stringStateVariables";
import DateStateVariable from "./dateStateVariable";
import ObjectStateVariable from "./objectStateVariable";
import ArrayStateVariable from "./arrayStateVariable";
import ParentStateComponent from "./parentStateComponent";
import ReduxExamples from "./ReduxExamples/index";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
    </div>
  );
}
export default Assignment4;
