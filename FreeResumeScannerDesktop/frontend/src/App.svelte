<script>
  import logo from './assets/images/logo-universal.png'
  import {ScanResume} from '../wailsjs/go/main/App.js'

  let resumeLength = ""
  let resumeMeasurables = ""
  let resumeLinkedIn = ""
  let resumeSoftSkills = ""
  let resumeHardSkills = ""
  let resume
  let job


  function scan() {
    ScanResume(resume, job).then((result) => {
      resumeLength = result.resume_length;
      resumeMeasurables = result.measurable;
      resumeLinkedIn = result.linked_in;
      resumeSoftSkills= result.soft_skills;
      resumeHardSkills= result.hard_skills;
    })
  }
</script>

<main>
  <img alt="Wails logo" id="logo" src="{logo}">
  <div class="container">
    <div class="input-box" id="input1">
      <input autocomplete="off" bind:value={resume} class="input" id="resume" type="text" placeholder="Paste Resume Here"/>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Metric</th>
          <th scope="col">Value</th>
          <th scope="col">Suggestion</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Measurable</td>
          <td id="resume-measurable">{resumeMeasurables}</td>
          <td><a href="https://freeresumescanner.com/blog/2022/make-your-resume-pop-with-measurable-bullet-points">Make your Resume Pop with Measurable Bullet Points </a></td>
        </tr>
        <tr>
          <td>Missing Keywords</td>
          <td id="job-description-skills">{resumeHardSkills} , {resumeSoftSkills}</td>
          <td><a href="https://freeresumescanner.com/blog/2022/get-into-a-recruiters-inbox-with-keywords">Get into a Recruiters Inbox with Keywords</a></td>
        </tr>
        <tr>
          <td>Resume Length</td>
          <td id="resume-length-result">{resumeLength}</td>
          <td><a href="https://freeresumescanner.com/blog/2022/dont-get-auto-rejected-keep-your-resume-between-500-1000-words">Don't get auto-rejected keep your Resume between 500-1000 words </a></td>
        </tr>
        <tr>
          <td>Has LinkedIn</td>
          <td id="resume-has-linkedin-result">{resumeLinkedIn}</td>
          <td><a href="https://freeresumescanner.com/blog/2022/use-linkedin-so-that-recruiters-can-dm-you">Use LinkedIn so that Recruiters can DM you</a></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="input-box" id="input2">
      <input autocomplete="off" bind:value={job} class="input" id="job" type="text" placeholder="Paste Job Description Here"/>
    </div>
  </div>

  <button class="btn" on:click={scan}>Scan Resume</button>


</main>

<style>

  #logo {
    display: block;
    width: 30%;
    height: 30%;
    margin: auto;
    padding: 10% 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
  }

  div.container{
    display: flex;
    flex-wrap: nowrap;
  }

  table, th, td {
    margin-top: 10px;
    border: 1px solid black;
    border-collapse: collapse;
    background-color: antiquewhite;
    flex: 40%;
    color: black;
  }
  .input-box {
    margin: 10px;
    padding: 10px;
    flex: 40%;

  }

  .btn {
    width: 70%;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;
  }

  .input-box .btn:hover {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: #333333;
  }

  .input-box .input {
    border: none;
    border-radius: 3px;
    outline: none;
    height: 200px;
    line-height: 30px;
    padding: 0 10px;
    background-color: rgba(240, 240, 240, 1);
    -webkit-font-smoothing: antialiased;
  }

  .input-box .input:hover {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .input-box .input:focus {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

</style>
