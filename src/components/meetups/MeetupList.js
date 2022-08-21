import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {DUMMY_DATA.map(() => {
        return <li key={meetup.id}> {meetup.title}</li>;
      })}
    </ul>
  );
}

export default MeetupList;
