import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Header } from "../components";
import { scheduleData } from "../data/dummy";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const Calendar = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [event, setEvent] = useState({ Id: "30", title: "", date: "" });
  const addEventHandle = (e) => {
    setDate(e.dateStr);
  };

  const addEventTitleHandle = () => {
    console.log(title.length)
    if (title.length > 0) {
      setEvent({ Id: "30", title, date });
      setDate("");
      setTitle("");
    }else{
      setError("Please add title");
      return;
    }
  };
  return (
    <div
      className={`${
        date.length > 0 ? "bg-gray-500" : "bg-white"
      }  rounded-3xl mb-8 p-2 md:p-10 relative`}
    >
      <Header category="Page" title="Calendar" />
      <div className="w-[85%] mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          dateClick={(e) => addEventHandle(e)}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={[...scheduleData, event]}
          
        />
      </div>
      {date.length > 0 && (
        <Card
          sx={{
            width: 500,
            position: "absolute",
            top: "20%",
            left: "50%",
            bg: "#fff",
            zIndex: 10,
            transform: "translateX(-50%)",
          }}
        >
          <CardContent>
            <Typography
              component="p"
              variant="h4"
              sx={{ marginBottom: "10px" }}
            >
              Add Event
            </Typography>
            <TextField
              error={error.length > 0 ? true : false}
              helperText={error.length > 0 && error}
              id="Title"
              label="Title"
              variant="outlined"
              sx={{ width: "100%" }}
              value={title}
              onChange={(e) => {
                setError('')
                setTitle(e.target.value)}}
            />
            <Typography component="p" sx={{ marginY: "20px" }}>
              Event for {date}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button color="success" onClick={addEventTitleHandle}>
                Save
              </Button>
              <Button color="error" onClick={() => setDate("")}>
                Cancel
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Calendar;
