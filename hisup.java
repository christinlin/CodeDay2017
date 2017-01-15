 //Declaring the variable
     public AudioClip[] list;
 
     void Start ()
         {
             //Loading the items into the array
             list =  new AudioClip[]{(AudioClip)Resources.Load("Sound/Music/intro.wav"),
                                     (AudioClip)Resources.Load("Sound/Music/level1.wav"), 
                                     (AudioClip)Resources.Load("Sound/Music/level2.wav"), 
                                     (AudioClip)Resources.Load("Sound/Music/level3.wav")};
         }