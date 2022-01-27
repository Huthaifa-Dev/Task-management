import React, { useState } from "react";
import TasksFilter from "./Components/Filters/TasksFilter";
import Tasks from "./Components/Items/Tasks";
import TaskForm from "./Components/NewItem/TaskForm";

import './App.css';
import NewTask from "./Components/NewItem/NewTask";

function App() {
  const DUMP_TASKS = [
    {
      'title': 'UX Adjustments',
      'tag': 'Research',
      'description': 'It just needs to adabt the UI from what you did before.',
      'state': 'todo'
    },
    {
      'title': 'Design System',
      'tag': 'UI Design',
      'description': 'Create a consistent look and feel both on weeb and mobile.',
      'state': 'qa'
    },
    {
      'title': 'Presentation',
      'tag': 'Planning',
      'description': 'Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.',
      'state': 'completed'
    },
    {
      'title': 'Moodboards',
      'tag': 'UI Design',
      'description': 'Add a field in the portal to let the user connect their Slack account.',
      'state': 'in work'
    }
  ];


  const [tasks, setTasks] = useState(DUMP_TASKS);

  const transferData = (data) => {
    setTasks((prevTasks) => {
      return [data, ...prevTasks];
    })
  }

  return (
    <React.Fragment>
      <div className="temp-nav"></div>
      <div className="todo-states">
        <Tasks tasks={tasks} state={'todo'} />
        <Tasks tasks={tasks} state={'in work'} />
        <Tasks tasks={tasks} state={'qa'} />
        <Tasks tasks={tasks} state={'completed'} />
      </div>
      <NewTask />
    </React.Fragment>
  );
}

export default App;
