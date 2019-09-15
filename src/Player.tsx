import * as React from "react";
import * as ReactHowler from "ReactHowler";

const data = [
  {
    id: "114",
    verse: "1",
    arabicAudio: "../audio/arabic/114001.mp3",
    tamilAudio: "./audio/tamil/114.mp3",
    arabicText: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
    tamilText:
      "(நபியே!) நீர் கூறுவீராக: மனிதர்களின் இறைவனிடத்தில் நான் பாதுகாவல் தேடுகிறேன்."
  }
];

interface IProps {}

interface IState {
  text: string;
  title: string;
  audioFile: string;
}

export class Player extends React.Component<IProps, IState> {
  public surah: any;
  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.surah = data[0];
    this.state = {
      title: this.surah.id,
      text: this.surah.arabicText,
      audioFile: this.surah.arabicAudio
    };

    // this.configureAudio();
  }

  // public configureAudio() {
  //   const { arabicAudio, tamilAudio, tamilText, arabicText } = this.surah;
  //   const sound = new Howl({
  //     src: arabicAudio
  //   });

  //   sound.once("onload", () => {
  //     sound.play();
  //   });

  //   sound.on("end", () => {
  //     console.log("Arabic audio is finished...");
  //   });
  // }

  public render() {
    const { title, text, audioFile } = this.state;
    const playing = false;
    return (
      <div>
        <h1>Chapter {title}</h1>

        <div>{text}</div>

        <ReactHowler src={audioFile} playing={playing} />
      </div>
    );
  }
}
