<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="it_IT">
<context>
    <name>DialogAbout</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="79"/>
        <source>About SimpleScreenRecorder</source>
        <translation>Info su SimpleScreenRecorder</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="88"/>
        <source>For more information:</source>
        <translation>Per maggiori informazioni:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="89"/>
        <source>The source code of this program can be found at:</source>
        <translation>Il codice sorgente di questo programma è disponibile all&apos;indirizzo:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="90"/>
        <source>This program uses:</source>
        <translation>Questo programma utilizza:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="91"/>
        <source>%1 for the graphical user interface</source>
        <translation>%1 per l&apos;interfaccia grafica utente</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="92"/>
        <source>%1 or %2 (depending on your distribution) for video/audio encoding</source>
        <translation>%1 o %2 (a seconda della distribuzione) per la codifica video/audio</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="93"/>
        <source>%1 for hooking system functions for OpenGL recording</source>
        <translation>%1 per le funzioni di sistema di aggancio per la registrazione OpenGL</translation>
    </message>
</context>
<context>
    <name>DialogGLInject</name>
    <message>
        <location filename="../GUI/PageInput.cpp" line="813"/>
        <source>OpenGL Settings</source>
        <translation>Impostazioni OpenGL</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="816"/>
        <source>&lt;p&gt;Warning: OpenGL recording works by injecting a library into the program that will be recorded. This library will override some system functions in order to capture the frames before they are displayed on the screen. If you are trying to record a game that tries to detect hacking attempts on the client side, it&apos;s (theoretically) possible that the game will consider this a hack. This might even get you banned, so it&apos;s a good idea to make sure that the program you want to record won&apos;t ban you, *before* you try to record it. You&apos;ve been warned :).&lt;/p&gt;

&lt;p&gt;Another warning: OpenGL recording is experimental, it may not work or even crash the program you are recording. If you are worried about losing program data, make a backup first!&lt;/p&gt;

&lt;p&gt;If you want to record Steam games, &lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;read this first&lt;/a&gt;.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Attenzione: la registrazione OpenGL funziona iniettando una libreria nel programma che verrà registrato. Questa biblioteca avrà la precedenza su alcune funzioni di sistema al fine di catturare i fotogrammi prima di essere visualizzati sullo schermo. Se si sta tentando di registrare un gioco che tenta di rilevare tentativi di hacking sul lato client, è (teoricamente) possibile che il gioco consideri questo come un hack. Questo potrebbe anche farti bannare, quindi è una buona idea per assicurarsi che il programma che si desidera registrare non bannerà voi, se * prima * tenta di registrarlo. Siete stati avvertiti:).&lt;/p&gt;

&lt;p&gt;Un altro avvertimento: la registrazione OpenGL è sperimentale, può non funzionare o addirittura mandare in crash il programma che si sta registrando. Se siete preoccupati di perdere i dati del programma, fare un backup prima!&lt;/p&gt;

&lt;p&gt;Se volete registrare giochi Steam, &lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;leggere questo prima&lt;/a&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="829"/>
        <source>Command:</source>
        <translation>Comando:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="831"/>
        <source>This command will be executed to start the program that should be recorded.</source>
        <translation>Questo comando verrà eseguito per avviare il programma che deve essere registrato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="833"/>
        <source>Working directory:</source>
        <translation>Directory di lavoro:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="835"/>
        <source>The command will be executed in this directory. If you leave this empty, the working directory won&apos;t be changed.</source>
        <translation>Il comando verrà eseguito in questa directory. Se si lascia questo vuoto, la directory di lavoro non verrà modificata.</translation>
    </message>
    <message>
        <source>Source:</source>
        <translation type="obsolete">Fonte:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="837"/>
        <source>Start the OpenGL application automatically</source>
        <translation type="unfinished">Avviare l&apos;applicazione OpenGL automaticamente</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="838"/>
        <source>If checked, the above command will be executed automatically (combined with some environment variables). If not checked,
you have to start the OpenGL application yourself (the full command, including the required environment variables, is shown in the log).</source>
        <translation type="unfinished">Se selezionato, il comando di cui sopra verrà eseguito automaticamente (in combinazione con alcune variabili d&apos;ambiente). Se non è selezionata,
dovete avviare l&apos;applicazione OpenGL voi stessi (il comando completo, incluse le variabili di ambiente richieste, è indicato nel registro).</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="841"/>
        <source>Relax shared memory permissions (insecure)</source>
        <translatorcomment>Permessi di memoria condivisa Relax (insicuro)</translatorcomment>
        <translation>Relax shared memory permissions (insecure)</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="842"/>
        <source>If checked, other users on the same machine will be able to attach to the shared memory that&apos;s used for communication with the OpenGL program.
This means other users can (theoretically) see what you are recording, modify the frames, inject their own frames, or simply disrupt the communication.
This even applies to users that are logged in remotely (ssh). You should only enable this if you need to record a program that runs as a different user.</source>
        <translation>Se selezionata, altri utenti sulla stessa macchina potranno connettersi al memoria condivisa che viene utilizzata per la comunicazione con il programma OpenGL.
Ciò significa che gli altri utenti possono (teoricamente) vedere quello che si sta registrando, modificare i frame, iniettare i propri frames, o semplicemente interrompere la comunicazione.
Questo vale anche per gli utenti che sono collegati in remoto (via ssh). Si deve attivare questa funzione solo se avete bisogno di registrare un programma che viene eseguito come un utente diverso.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="846"/>
        <source>Maximum image size (megapixels):</source>
        <translation type="unfinished">Dimensioni massime dell&apos;immagine (megapixels):</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="848"/>
        <source>This setting changes the amount of shared memory that will be allocated to send frames back to the main program.
The size of the shared memory can&apos;t be changed anymore once the program has been started, so if the program you
are trying to record is too large, recording won&apos;t work. 2 megapixels should be enough in almost all cases. Be careful,
high values will use a lot of memory!</source>
        <translation type="unfinished">Questa impostazione cambia la quantità di memoria condivisa che sarà assegnato per inviare frames verso il programma principale.
La dimensione della memoria condivisa non può più essere cambiato una volta che il programma è stato avviato, quindi se il programma
sta cercando di registrare è troppo grande, la registrazione non funziona. 2 megapixel dovrebbero essere sufficienti in quasi tutti i casi. Fate attenzione,
valori elevati useranno un sacco di memoria!</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="852"/>
        <source>Capture front buffer instead of back buffer</source>
        <translation type="unfinished">Cattura front buffer invece di buffer di fondo</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="853"/>
        <source>If checked, the injected library will read the front buffer (the frame that&apos;s currently on the screen) rather than the back buffer
(the new frame). This may be useful for some special applications that draw directly to the screen.</source>
        <translation type="unfinished">Se selezionata, la libreria iniettata leggerà il front buffer (il frame che è attualmente visualizzato sullo schermo), piuttosto che il buffer di fondo
(il nuovo frame). Ciò può essere utile per alcune applicazioni speciali che attingono direttamente sullo schermo.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="856"/>
        <source>Limit application frame rate</source>
        <translatorcomment>Limitare Il frame rate dell&apos;applicazione</translatorcomment>
        <translation>Limit application frame rate</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="857"/>
        <source>If checked, the injected library will slow down the application so the frame rate doesn&apos;t become higher than the recording frame rate.
This stops the application from wasting CPU time for frames that won&apos;t be recorded, and sometimes results in smoother video
(this depends on the application).</source>
        <translation>Se selezionata, la libreria iniettata rallenterà l&apos;applicazione in modo che il Il frame rate non diventi superiore al frame rate di registrazione.
Questo impedisce l&apos;applicazione di sprecare tempo di CPU per i fotogrammi che non verranno registrati e, talvolta, si traduce in video più fluido
(questo dipende dall&apos;applicazione).</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="862"/>
        <source>Close</source>
        <translation>Chiudi</translation>
    </message>
</context>
<context>
    <name>Logger</name>
    <message>
        <location filename="../AV/FastResampler.cpp" line="126"/>
        <source>Error: Resample ratio is out of range!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="130"/>
        <source>Error: Drift ratio is out of range!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="160"/>
        <source>Resample ratio is %1 (was %2).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="76"/>
        <source>Warning: Pixel format is not supported (%1 -&gt; %2), using swscale instead. This is not a problem, but performance will be worse.</source>
        <translation type="unfinished">Attenzione: il formato pixel non è supportato (%1 -&gt; %2), utilizzando swscale. Questo non è un problema, ma le prestazioni caleranno.</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="85"/>
        <source>Error: Can&apos;t get swscale context!</source>
        <comment>Don&apos;t translate &apos;swscale&apos;</comment>
        <translation type="unfinished">Errore: Impossibile ottenere contesto di swscale!</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="104"/>
        <location filename="../AV/FastScaler.cpp" line="127"/>
        <source>Warning: Memory is not properly aligned for SSE, using fallback converter instead. This is not a problem, but performance will be worse.</source>
        <comment>Don&apos;t translate &apos;fallback&apos;</comment>
        <translation type="unfinished">Attenzione: La memoria non è correttamente allineata per SSE, utilizzando fallback converter. Questo non è un problema, ma le prestazioni caleranno.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="32"/>
        <source>Warning: An overrun has occurred, some samples were lost.</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished">Attenzione: si è verificato un overrun, alcuni campioni sono andati persi.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="34"/>
        <source>Error: Can&apos;t recover device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished">Errore: Impossibile recuperare dispositivo dopo il overrun!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="38"/>
        <source>Error: Can&apos;t start PCM device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished">Errore: Impossibile avviare dispositivo PCM dopo il overrun!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="66"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="55"/>
        <location filename="../AV/Input/JACKInput.cpp" line="56"/>
        <location filename="../AV/Input/X11Input.cpp" line="206"/>
        <source>Stopping input thread ...</source>
        <translation type="unfinished">Arresto thread di input...</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="89"/>
        <location filename="../AV/SimpleSynth.cpp" line="89"/>
        <source>Error: Can&apos;t open PCM device!</source>
        <translation type="unfinished">Errore: Impossibile aprire il dispositivo PCM!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="93"/>
        <location filename="../AV/SimpleSynth.cpp" line="93"/>
        <source>Error: Can&apos;t get PCM hardware parameters!</source>
        <translation type="unfinished">Errore: Impossibile ottenere i parametri hardware PCM!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="99"/>
        <location filename="../AV/SimpleSynth.cpp" line="99"/>
        <source>Error: Can&apos;t set access type!</source>
        <translation type="unfinished">Errore: Impossibile impostare il tipo di accesso!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="105"/>
        <location filename="../AV/SimpleSynth.cpp" line="105"/>
        <source>Error: Can&apos;t set sample format!</source>
        <translation type="unfinished">Errore: Impossibile impostare il formato campione!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="112"/>
        <location filename="../AV/SimpleSynth.cpp" line="112"/>
        <source>Error: Can&apos;t set sample rate!</source>
        <translation type="unfinished">Errore: Impossibile impostare la frequenza di campionamento!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="116"/>
        <location filename="../AV/SimpleSynth.cpp" line="116"/>
        <source>Warning: Sample rate %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished">Attenzione: La frequenza di campionamento %1 non è supportata, utilizzando %2. Questo non è un problema.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="124"/>
        <location filename="../AV/SimpleSynth.cpp" line="124"/>
        <source>Error: Can&apos;t set channel count!</source>
        <translation type="unfinished">Errore: Impossibile impostare il numero di canali!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="131"/>
        <location filename="../AV/SimpleSynth.cpp" line="131"/>
        <source>Error: Can&apos;t set period size!</source>
        <translation type="unfinished">Errore: Impossibile impostare le dimensioni periodo!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="135"/>
        <location filename="../AV/SimpleSynth.cpp" line="135"/>
        <source>Warning: Period size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished">Attenzione: le dimensioni Periodo %1 non è supportato, utilizzando %2 .Questo non è un problema.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="144"/>
        <location filename="../AV/SimpleSynth.cpp" line="144"/>
        <source>Error: Can&apos;t set buffer size!</source>
        <translation type="unfinished">Errore: Impossibile impostare la dimensione del buffer!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="148"/>
        <location filename="../AV/SimpleSynth.cpp" line="148"/>
        <source>Warning: Buffer size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished">Attenzione: dimensione del buffer %1 non è supportato, utilizzando %2.Questo non è un problema.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="156"/>
        <location filename="../AV/SimpleSynth.cpp" line="156"/>
        <source>Error: Can&apos;t apply PCM hardware parameters!</source>
        <translation type="unfinished">Errore: Impossibile applicare parametri hardware PCM!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="174"/>
        <source>Error: Can&apos;t start PCM device!</source>
        <translation type="unfinished">Impossibile avviare il dispositivo PCM!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="195"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="95"/>
        <location filename="../AV/Input/JACKInput.cpp" line="238"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="298"/>
        <location filename="../AV/Input/X11Input.cpp" line="333"/>
        <source>Input thread started.</source>
        <translation type="unfinished">Thread d&apos;ingresso avviato.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="215"/>
        <location filename="../AV/SimpleSynth.cpp" line="207"/>
        <source>Error: Can&apos;t check whether samples are available!</source>
        <translation type="unfinished">Errore: Impossibile verificare se i campioni sono disponibili!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="228"/>
        <source>Error: Can&apos;t read samples!</source>
        <translation type="unfinished">Errore: Impossibile leggere i campioni!</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="254"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="155"/>
        <location filename="../AV/Input/JACKInput.cpp" line="286"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="387"/>
        <location filename="../AV/Input/X11Input.cpp" line="423"/>
        <source>Input thread stopped.</source>
        <translation type="unfinished">Thread d&apos;ingresso fermato.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="258"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="159"/>
        <location filename="../AV/Input/JACKInput.cpp" line="290"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="391"/>
        <location filename="../AV/Input/X11Input.cpp" line="427"/>
        <source>Exception &apos;%1&apos; in input thread.</source>
        <translation type="unfinished">Eccezione &apos;%1&apos; in input thread.</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="261"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="162"/>
        <location filename="../AV/Input/JACKInput.cpp" line="293"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="394"/>
        <location filename="../AV/Input/X11Input.cpp" line="430"/>
        <source>Unknown exception in input thread.</source>
        <translation type="unfinished">Eccezione sconosciuta in input thread.</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectInput.cpp" line="122"/>
        <source>Error: Image is too small!</source>
        <translation type="unfinished">Errore: L&apos;immagine è troppo piccola!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectInput.cpp" line="126"/>
        <source>Error: Image is too large!</source>
        <translation type="unfinished">Errore: L&apos;immagine è troppo grande!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectInput.cpp" line="134"/>
        <source>Error: Image doesn&apos;t fit in memory!</source>
        <translation type="unfinished">Errore: L&apos;immagine non entra in memoria!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectLauncher.cpp" line="103"/>
        <location filename="../AV/Input/X11Input.cpp" line="243"/>
        <source>Error: Can&apos;t get shared memory!</source>
        <translation type="unfinished">Errore: Impossibile ottenere la memoria condivisa!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectLauncher.cpp" line="108"/>
        <location filename="../AV/Input/X11Input.cpp" line="248"/>
        <source>Error: Can&apos;t attach to shared memory!</source>
        <translation type="unfinished">Errore: Impossibile collegarsi alla memoria condivisa!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectLauncher.cpp" line="118"/>
        <source>Error: Can&apos;t get frame shared memory!</source>
        <translation type="unfinished">Errore: Impossibile ottenere fotogramma della memoria condivisa!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectLauncher.cpp" line="123"/>
        <source>Error: Can&apos;t attach to frame shared memory!</source>
        <translation type="unfinished">Errore: Impossibile connettersi al fotogramma della memoria condivisa!</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectLauncher.cpp" line="150"/>
        <source>Full command</source>
        <translation type="unfinished">Comando completo</translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectLauncher.cpp" line="158"/>
        <source>Error: Can&apos;t run command!</source>
        <translation type="unfinished">Errore: impossibile eseguire il comando!</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="72"/>
        <source>Error: Could not connect to JACK!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="81"/>
        <source>Error: Could not create JACK port!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="87"/>
        <source>Error: Could not set JACK process callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="91"/>
        <source>Error: Could not set JACK sample rate callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="95"/>
        <source>Error: Could not set JACK xrun callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="99"/>
        <source>Error: Could not set JACK port connect callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="104"/>
        <source>Error: Could not activate JACK client!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="112"/>
        <location filename="../AV/Input/JACKInput.cpp" line="123"/>
        <location filename="../AV/Input/JACKInput.cpp" line="251"/>
        <source>Connecting port %1 to %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="255"/>
        <source>Disconnecting port %1 from %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="35"/>
        <source>Error: pa_mainloop_prepare failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_prepare&apos;</comment>
        <translation type="unfinished">Errore: pa_mainloop_prepare non riuscito!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="39"/>
        <source>Error: pa_mainloop_poll failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_poll&apos;</comment>
        <translation type="unfinished">Errore: pa_mainloop_poll non riuscito!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="43"/>
        <source>Error: pa_mainloop_dispatch failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_dispatch&apos;</comment>
        <translation type="unfinished">Errore: pa_mainloop_dispatch non riuscito!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="53"/>
        <source>Error: Could not create main loop!</source>
        <translation type="unfinished">Errore: Impossibile creare loop principale!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="60"/>
        <source>Error: Could not create context!</source>
        <translation type="unfinished">Errore: Impossibile creare il contesto!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="64"/>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio. Try using the ALSA backend instead.</source>
        <translation type="unfinished">Errore: Impossibile connettersi! Motivo: %1
È possibile che il sistema non utilizzi PulseAudio. Provare a utilizzare il backend ALSA invece.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="77"/>
        <source>Error: Connection attempt failed! Reason: %1</source>
        <translation type="unfinished">Errore: tentativo di connessione non riuscita! motivo %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="114"/>
        <source>Error: Could not create stream! Reason: %1</source>
        <translation type="unfinished">Errore: Impossibile creare il flusso! motivo: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="121"/>
        <source>Error: Could not connect stream! Reason: %1</source>
        <translation type="unfinished">Errore: Impossibile connettersi allo stream! motivo: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="132"/>
        <source>Error: Stream connection attempt failed! Reason: %1</source>
        <translation type="unfinished">Errore: tentativo di connessione allo stream non riuscito! motivo: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="244"/>
        <source>Error: Could not get names of sources! Reason: %1</source>
        <translation type="unfinished">Errore: Impossibile ottenere i nomi delle fonti! motivo: %1</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="312"/>
        <source>Error: pa_stream_peek failed!</source>
        <comment>Don&apos;t translate &apos;pa_stream_peek&apos;</comment>
        <translation type="unfinished">Errore: pa_stream_peek non riuscito!</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="375"/>
        <source>Warning: Audio source was suspended. The current segment will be stopped until the source is resumed.</source>
        <translation type="unfinished">Attenzione: sorgente audio è stata sospesa. Il segmento corrente verrà interrotto fino a quando la sorgente viene ripresa.</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="380"/>
        <source>Warning: Stream was moved to a different source.</source>
        <translation type="unfinished">Attenzione: Stream è stato spostato in una fonte diversa.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="74"/>
        <source>Error: Unsupported X11 image pixel format!</source>
        <translation type="unfinished">Errore: Formato X11 pixel dell&apos;immagine non supportato!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="185"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="58"/>
        <source>Error: Width or height is zero!</source>
        <translation type="unfinished">Errore: larghezza o l&apos;altezza è pari a zero!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="189"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="62"/>
        <source>Error: Width or height is too large, the maximum width and height is %1!</source>
        <translation type="unfinished">Errore: larghezza o l&apos;altezza è troppo grande, la massima larghezza e l&apos;altezza è %1!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="226"/>
        <source>Error: Can&apos;t open X display!</source>
        <comment>Don&apos;t translate &apos;display&apos;</comment>
        <translation type="unfinished">Errore: Impossibile aprire X display!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="235"/>
        <source>Using X11 shared memory.</source>
        <translation type="unfinished">Utilizzando X11 memoria condivisa.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="238"/>
        <source>Error: Can&apos;t create shared image!</source>
        <translation type="unfinished">Errore: Impossibile creare un&apos;immagine condivisa!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="254"/>
        <source>Not using X11 shared memory.</source>
        <translation type="unfinished">Non usando X11 memoria condivisa.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="262"/>
        <source>Warning: XFixes is not supported by server, the cursor has been hidden.</source>
        <comment>Don&apos;t translate &apos;XFixes&apos;</comment>
        <translation type="unfinished">Attenzione: XFixes non è supportata dal server, il cursore è stato nascosto.</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="317"/>
        <source>Error: Invalid screen bounding box!</source>
        <translation type="unfinished">Errore: delimitazione della schermata non valida!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="373"/>
        <source>Error: Can&apos;t attach server to shared memory!</source>
        <translation type="unfinished">Errore: Impossibile collegare server a memoria condivisa!</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="379"/>
        <source>Error: Can&apos;t get image (using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="unfinished">Errore: Impossibile ottenere l&apos;immagine (con memoria condivisa)!
     Solitamente ciò significa che l&apos;area di registrazione non è completamente all&apos;interno dello schermo. O hai cambiato la risoluzione dello schermo?</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="390"/>
        <source>Error: Can&apos;t get image (not using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="unfinished">Errore: Impossibile ottenere l&apos;immagine (non si usa memoria condivisa)!
Solitamente ciò significa che l&apos;area di registrazione non è completamente all&apos;interno dello schermo. O hai cambiato la risoluzione dello schermo?</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="45"/>
        <source>Error: Sample rate it zero.</source>
        <translation type="unfinished">Errore: Il campionamento di frequenza è pari a zero.</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="63"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="104"/>
        <source>Warning: Codec option &apos;%1&apos; was not recognised!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="132"/>
        <source>Error: Encoder requires an unsupported sample format!</source>
        <translation type="unfinished">Errore: Il codificatore richiede un formato di campione non supportato!</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="155"/>
        <location filename="../AV/Output/AudioEncoder.cpp" line="176"/>
        <source>Error: Encoding of audio frame failed!</source>
        <translation type="unfinished">Errore: Codifica dei frame audio non riuscita!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="33"/>
        <source>Error: Option &apos;%1&apos; could not be parsed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="73"/>
        <source>Stopping encoder thread ...</source>
        <translation type="unfinished">Arresto encoder thread ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="93"/>
        <source>Error: Can&apos;t find codec!</source>
        <translation type="unfinished">Errore: Impossibile trovare il codec!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="98"/>
        <source>Using codec %1 (%2).</source>
        <translation type="unfinished">Utilizzando codec %1 (%2).</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="107"/>
        <source>Warning: This codec is considered experimental by libav/ffmpeg.</source>
        <translation type="unfinished">Avvertenza: Questo codec è considerato sperimentale per libav/ffmpeg.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="117"/>
        <source>Error: Can&apos;t open codec!</source>
        <translation type="unfinished">Errore: Impossibile aprire codec!</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="171"/>
        <source>Encoder thread started.</source>
        <translation type="unfinished">Encoder thread avviato.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="200"/>
        <source>Flushing encoder ...</source>
        <translation type="unfinished">Flushing encoder ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="207"/>
        <source>Encoder thread stopped.</source>
        <translation type="unfinished">Encoder thread fermato.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="211"/>
        <source>Exception &apos;%1&apos; in encoder thread.</source>
        <translation type="unfinished">Eccezione &apos;%1&apos; in encoder thread.</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="214"/>
        <source>Unknown exception in encoder thread.</source>
        <translation type="unfinished">Eccezione sconosciuta in encoder thread.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="72"/>
        <source>Stopping encoders ...</source>
        <translation type="unfinished">Arresto encoders ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="79"/>
        <source>Waiting for muxer thread to stop ...</source>
        <translation type="unfinished">Aspettando muxer thread per l&apos;arresto ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="100"/>
        <source>Error: Can&apos;t write header!</source>
        <comment>Don&apos;t translate &apos;header&apos;</comment>
        <translation type="unfinished">Errore: Impossibile scrivere header!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="111"/>
        <source>Finishing encoders ...</source>
        <translation type="unfinished">Finalizzando encoders ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="143"/>
        <source>Error: Can&apos;t create new stream!</source>
        <translation type="unfinished">Errore: Impossibile creare nuovo stream!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="149"/>
        <source>Error: Can&apos;t get codec context defaults!</source>
        <translation type="unfinished">Errore: Impossibile ottenere le impostazioni predefinite del contesto codec!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="195"/>
        <source>Error: Can&apos;t find chosen output format!</source>
        <translation type="unfinished">Errore: Impossibile trovare il formato di output scelto!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="199"/>
        <source>Using format %1 (%2).</source>
        <translation type="unfinished">utilizzando il formato %1 (%2).</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="204"/>
        <source>Error: Can&apos;t allocate format context!</source>
        <translation type="unfinished">Errore: Impossibile assegnare contesto di formato!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="211"/>
        <source>Error: Can&apos;t open output file!</source>
        <translation type="unfinished">Errore: Impossibile aprire il file di output!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="224"/>
        <source>Error: Can&apos;t write trailer, continuing anyway.</source>
        <comment>Don&apos;t translate &apos;trailer&apos;</comment>
        <translation type="unfinished">Errore: Impossibile scrivere trailer, continua comunque.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="257"/>
        <source>Muxer thread started.</source>
        <translation type="unfinished">Muxer thread avviato.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="311"/>
        <source>Error: Can&apos;t write frame to muxer!</source>
        <translation type="unfinished">Errore: Impossibile scrivere frame per muxer!</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="339"/>
        <source>Muxer thread stopped.</source>
        <translation type="unfinished">Muxer thread fermato.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="343"/>
        <source>Exception &apos;%1&apos; in muxer thread.</source>
        <translation type="unfinished">Eccezione &apos;%1&apos; in muxer thread.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="346"/>
        <source>Unknown exception in muxer thread.</source>
        <translation type="unfinished">Eccezione sconosciuta in muxer thread.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="122"/>
        <source>Stopping synchronizer thread ...</source>
        <translation type="unfinished">Arresto sincronizzazione thread ...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="258"/>
        <source>Warning: Received video frame with non-monotonic timestamp.</source>
        <translation type="unfinished">Attenzione: video frame ricevuti con data e ora non monotonica.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="284"/>
        <source>Warning: Video buffer overflow, some frames will be lost. The audio input seems to be too slow.</source>
        <translation type="unfinished">Attenzione: sovraccarico del buffer Video, andranno persi alcuni fotogrammi. L&apos;ingresso audio sembra essere troppo lento.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="342"/>
        <source>Warning: Received audio samples with non-monotonic timestamp.</source>
        <translation type="unfinished">Attenzione: campioni audio ricevuti con timestamp non monotonica.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="362"/>
        <source>Warning: Too many audio samples, dropping samples to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="371"/>
        <source>Warning: Not enough audio samples, inserting silence to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="396"/>
        <source>Warning: Audio input is more than 2% too slow!</source>
        <translation type="unfinished">Attenzione: ingresso audio è più di 5% più lento! {2%?}</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="400"/>
        <source>Warning: Audio input is more than 2% too fast!</source>
        <translation type="unfinished">Attenzione: ingresso audio è più di 5% più veloce! {2%?}</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="416"/>
        <source>Error: Audio sample format is not supported!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="430"/>
        <source>Warning: Audio buffer overflow, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost). The video input seems to be too slow.</source>
        <translation type="unfinished">Attenzione: sovraccarico del buffer audio, iniziando nuovo segmento per mantenere l&apos;audio in sincronia con il video (alcuni video e/o audio potrebbero andare persi). L&apos;ingresso video sembra essere troppo lento.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="466"/>
        <source>Warning: Received hole in audio stream, inserting silence to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="757"/>
        <source>Synchronizer thread started.</source>
        <translation type="unfinished">Sincronizzatore thread avviato.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="779"/>
        <source>Synchronizer thread stopped.</source>
        <translation type="unfinished">Sincronizzatore thread fermato.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="783"/>
        <source>Exception &apos;%1&apos; in synchronizer thread.</source>
        <translation type="unfinished">Eccezione &apos;%1&apos; in Sincronizzatore thread.</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="786"/>
        <source>Unknown exception in synchronizer thread.</source>
        <translation type="unfinished">Eccezione sconosciuta in sincronizzazione thread.</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="66"/>
        <source>Error: Width or height is not an even number!</source>
        <translation type="unfinished">Errore: larghezza o l&apos;altezza non è un numero pari!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="70"/>
        <source>Error: Frame rate it zero!</source>
        <translation type="unfinished">Errore: Frequenza fotogrammi Zero!</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="213"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="233"/>
        <source>Error: Encoding of video frame failed!</source>
        <translation type="unfinished">Errore: Codifica di un fotogramma video non riuscita!</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="27"/>
        <source>Warning: An underrun has occurred, some samples were too late.</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation type="unfinished">Attenzione: si è verificato un underrun, alcuni campioni erano ritardatari.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="29"/>
        <source>Error: Can&apos;t recover device after underrun!</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation type="unfinished">Errore: Impossibile recuperare dispositivo dopo underrun!</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="56"/>
        <source>Stopping synth thread ...</source>
        <translation type="unfinished">Arresto sintetizzato thread ...</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="189"/>
        <source>Synth thread started.</source>
        <translation type="unfinished">Sintetizzato thread avviato.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="257"/>
        <source>Error: Can&apos;t write samples!</source>
        <translation type="unfinished">Errore: Impossibile scrivere campioni!</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="265"/>
        <source>Synth thread stopped.</source>
        <translation type="unfinished">Sintetizzato thread fermato.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="269"/>
        <source>Exception &apos;%1&apos; in synth thread.</source>
        <translation type="unfinished">Eccezione &apos;%1&apos; in Sintetizzato thread.</translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="272"/>
        <source>Unknown exception in synth thread.</source>
        <translation type="unfinished">Eccezione sconosciuta in Sintetizzato thread.</translation>
    </message>
    <message>
        <location filename="../common/DetectCPUFeatures.cpp" line="39"/>
        <source>CPU features</source>
        <translation type="unfinished">Caratteristiche della CPU</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="116"/>
        <source>Error: Command-line option &apos;%1&apos; does not take a value!</source>
        <translation type="unfinished">Errore: Opzione della riga di comando &apos;%1&apos; non prende un valore!</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="144"/>
        <source>Error: Unknown command-line option &apos;%1&apos;!</source>
        <translation type="unfinished">Errore: opzione di riga di comando sconosciuta &apos;%1&apos;!</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="154"/>
        <source>Error: Unknown command-line argument &apos;%1&apos;!</source>
        <translation type="unfinished">Errore: argomento della riga di comando sconosciuto &apos;%1&apos;!</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="192"/>
        <source>SSR started</source>
        <translation type="unfinished">SSR avviato</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="201"/>
        <source>SSR stopped</source>
        <translation type="unfinished">SSR fermato</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="209"/>
        <source>Error: Can&apos;t create .ssr directory!</source>
        <translation type="unfinished">Errore: Impossibile creare la directory ssr.!</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../Main.cpp" line="181"/>
        <source>SimpleScreenRecorder has detected that you are using the proprietary NVIDIA driver with flipping enabled. This is known to cause glitches during recording. It is recommended to disable flipping. Do you want me to do this for you?

You can also change this option manually in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation type="unfinished">SimpleScreenRecorder ha rilevato che si sta utilizzando il driver proprietario NVIDIA con Flipping abilitato. Questo può provocare difetti durante la registrazione. Si consiglia di disattivare flipping. Vuoi che io faccia questo per te?

È inoltre possibile modificare manualmente questa opzione nel pannello di controllo NVIDIA.</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="186"/>
        <source>I couldn&apos;t disable flipping for some reason - sorry! Try disabling it in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation type="unfinished">Non ho potuto disattivare flipping per qualche motivo - spiacente! Prova a disabilitarlo dal pannello di controllo NVIDIA.</translation>
    </message>
</context>
<context>
    <name>PageDone</name>
    <message>
        <location filename="../GUI/PageDone.cpp" line="29"/>
        <source>The recording has been saved. You can edit the video now, or re-encode it with better settings to make the file smaller (the default settings are optimized for quality and speed, not file size).</source>
        <translation>La registrazione è stata salvata. È possibile modificare il video adesso, o ri-codificare con le impostazioni migliori per rendere il file più piccoli (le impostazioni predefinite sono ottimizzate per la qualità e la velocità, non dimensione del file).</translation>
    </message>
    <message>
        <location filename="../GUI/PageDone.cpp" line="32"/>
        <source>Back to the start screen</source>
        <translation>Torna alla schermata iniziale</translation>
    </message>
</context>
<context>
    <name>PageInput</name>
    <message>
        <location filename="../GUI/PageInput.cpp" line="77"/>
        <source>Video input</source>
        <translation>Ingresso video</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="80"/>
        <source>Record the entire screen</source>
        <translation>Registrare l&apos;intero schermo</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="81"/>
        <source>Record a fixed rectangle</source>
        <translation>Registrare un rettangolo fisso</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="82"/>
        <source>Follow the cursor</source>
        <translation>Seguire il cursore</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="83"/>
        <source>Record OpenGL (experimental)</source>
        <translation>Registrare OpenGL (sperimentale)</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="89"/>
        <source>Select what monitor should be recorded in a multi-monitor configuration.</source>
        <translation>Selezionare quale Monitor dovrebbe essere registrato in una configurazione multi-monitor.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="90"/>
        <source>Select rectangle...</source>
        <translation>Selezionare rettangolo...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="91"/>
        <source>Use the mouse to select the recorded rectangle.</source>
        <translation>Usa il mouse per selezionare il rettangolo da registrare.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="92"/>
        <source>Select window...</source>
        <translation>Selezionare la finestra...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="93"/>
        <source>Use the mouse to select a window to record.
Hint: If you click the border of a window, the entire window will be recorded (including the borders). Otherwise only
the client area of the window will be recorded.</source>
        <translation>Usa il mouse per selezionare una finestra da registrare.
Suggerimento: Se si fa clic sul bordo di una finestra, verrà registrata l&apos;intera finestra (incluso il bordo). altrimenti solo
l&apos;area client della finestra verrà registrato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="96"/>
        <source>OpenGL settings...</source>
        <translation>Impostazioni di OpenGL...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="97"/>
        <source>Change the settings for OpenGL recording.</source>
        <translation>Modificare le impostazioni per la registrazione OpenGL.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="98"/>
        <source>Left:</source>
        <translation>Sinistra:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="102"/>
        <source>The x coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>La coordinata x dell&apos;angolo superiore sinistro del rettangolo da registrare.
Suggerimento: È inoltre possibile modificare questo valore con la rotellina di scorrimento o le frecce su/giù.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="104"/>
        <source>Top:</source>
        <translation>Top:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="108"/>
        <source>The y coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>La coordinata y dell&apos;angolo superiore sinistro del rettangolo da registrare.
Suggerimento: È inoltre possibile modificare questo valore con la rotellina di scorrimento o le frecce su/giù.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="110"/>
        <source>Width:</source>
        <translation>Larghezza:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="114"/>
        <source>The width of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>La larghezza del rettangolo da registrare.
Suggerimento: È inoltre possibile modificare questo valore con la rotellina di scorrimento o le frecce su/giù.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="116"/>
        <source>Height:</source>
        <translation>Altezza:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="120"/>
        <source>The height of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>L&apos;altezza del rettangolo da registrare.
Suggerimento: È inoltre possibile modificare questo valore con la rotellina di scorrimento o le frecce su/giù.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="122"/>
        <source>Frame rate:</source>
        <translation>Frequenza dei fotogrammi:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="126"/>
        <source>The number of frames per second in the final video. Higher frame rates use more CPU time.</source>
        <translation>Il numero di fotogrammi al secondo nel video finale. Frequenze di fotogrammi più alti utilizzano più tempo di CPU.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="127"/>
        <source>Scale video</source>
        <translation>Ridimensiona video</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="128"/>
        <source>Enable or disable scaling. Scaling uses more CPU time, but if the scaled video is smaller, it could make the encoding faster.</source>
        <translation>Attivare o disattivare il ridimensionamento. il ridimensionamento usa più tempo di CPU, ma se il video è in scala più piccola, potrebbe rendere la codifica veloce.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="129"/>
        <source>Scaled width:</source>
        <translation>Ridimensiona larghezza:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="133"/>
        <source>Scaled height:</source>
        <translation>Ridimensiona altezza:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="137"/>
        <source>Record cursor</source>
        <translation>Registra cursore</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="207"/>
        <source>Audio input</source>
        <translation>Ingresso audio</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="209"/>
        <source>Record audio</source>
        <translation>Registra l&apos;audio</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="210"/>
        <source>Backend:</source>
        <translation>Backend:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="219"/>
        <source>The audio backend that will be used for recording.
The ALSA backend will also work on systems that use PulseAudio, but it is better to use the PulseAudio backend directly.</source>
        <translation>Il backend audio che verrà utilizzato per la registrazione.
Il backend ALSA funziona anche sui sistemi che usano PulseAudio, ma è meglio usare direttamente il backend PulseAudio.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="221"/>
        <source>Device:</source>
        <translation>Dispositivo:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="223"/>
        <source>The ALSA device that will be used for recording. Normally this should be &apos;default&apos;.
You can change this to something like plughw:0,0 (which means sound card 0 input 0 with plugins enabled).</source>
        <comment>Don&apos;t translate &apos;default&apos; and &apos;plughw&apos;</comment>
        <translation>Il dispositivo ALSA che verrà utilizzato per la registrazione. Normalmente questo dovrebbe essere &apos;default&apos;.
È possibile modificare questo in qualcosa come plughw: 0,0 (che significa scheda audio 0 ingresso 0 con plugin abilitato).</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="226"/>
        <source>Source:</source>
        <translation>Fonte:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="229"/>
        <source>The PulseAudio source that will be used for recording.
A &apos;monitor&apos; is a source that records the audio played by other applications.</source>
        <comment>Don&apos;t translate &apos;monitor&apos; unless PulseAudio does this as well</comment>
        <translation>La fonte PulseAudio che verrà utilizzato per la registrazione.
Un &apos;Monitor&apos; è una fonte che registra l&apos;audio riprodotto da altre applicazioni.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="231"/>
        <source>Refresh</source>
        <translation>Aggiorna</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="232"/>
        <source>Refreshes the list of PulseAudio sources.</source>
        <translation>Aggiorna l&apos;elenco delle fonti PulseAudio.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="235"/>
        <source>Record system microphone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="236"/>
        <source>If checked, the ports will be automatically connected to the system capture ports.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="237"/>
        <source>Record system speakers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="238"/>
        <source>If checked, the ports will be automatically connected to anything that connects to the system playback ports.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="271"/>
        <source>Back</source>
        <translation>Indietro</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="272"/>
        <source>Continue</source>
        <translation>Continuare</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="598"/>
        <source>All screens: %1x%2</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>Tutti gli schermi: %1x%2</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="602"/>
        <source>Screen %1: %2x%3 at %4,%5</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>Schermo %1: %2x%3 at %4,%5</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="750"/>
        <source>Screen %1</source>
        <comment>This appears in the screen labels</comment>
        <translation>Schermo %1</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="782"/>
        <source>You did not enter a command to start the OpenGL application that you want to record.
Click the &apos;OpenGL settings&apos; button and enter a command.</source>
        <translation>Non hai inserito un comando per avviare l&apos;applicazione OpenGL che si desidera registrare.
Fare clic sul pulsante &apos;Impostazioni OpenGL &quot;e immettere un comando.</translation>
    </message>
</context>
<context>
    <name>PageOutput</name>
    <message>
        <source>files</source>
        <comment>This appears in the file dialog, e.g. &apos;MP4 files&apos;</comment>
        <translation type="obsolete">files</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="58"/>
        <location filename="../GUI/PageOutput.cpp" line="61"/>
        <location filename="../GUI/PageOutput.cpp" line="64"/>
        <location filename="../GUI/PageOutput.cpp" line="67"/>
        <location filename="../GUI/PageOutput.cpp" line="103"/>
        <source>%1 files</source>
        <comment>This appears in the file dialog, e.g. &apos;MP4 files&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="70"/>
        <location filename="../GUI/PageOutput.cpp" line="76"/>
        <location filename="../GUI/PageOutput.cpp" line="83"/>
        <source>Other...</source>
        <translation>Altri...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="82"/>
        <source>Uncompressed</source>
        <translation>Non compresso</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="137"/>
        <source>Error: Could not find any suitable container in libavformat!</source>
        <translation>Errore: Impossibile trovare un contenitore adatto in libavformat!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="141"/>
        <source>Error: Could not find any suitable video codec in libavcodec!</source>
        <translation>Errore: Impossibile trovare alcun codec video adatto in libavcodec!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="145"/>
        <source>Error: Could not find any suitable audio codec in libavcodec!</source>
        <translation>Errore: Impossibile trovare alcun codec audio adatto in libavcodec!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="149"/>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="151"/>
        <source>Save as:</source>
        <translation>Salva come:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="153"/>
        <source>The recording will be saved to this location.</source>
        <translation>La registrazione verrà salvata in questa posizione.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="154"/>
        <source>Browse...</source>
        <translation>Sfoglia...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="155"/>
        <source>Separate file per segment</source>
        <translation>File separato per ogni segmento</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="156"/>
        <source>If checked, a separate video file will be created every time you pause and resume the recording.
If the original file name is &apos;test.mkv&apos;, the segments will be saved as &apos;test-0001.mkv&apos;, &apos;test-0002.mkv&apos;, ...
File names that exist already will be skipped.</source>
        <translation>Se selezionata, verrà creato un file video separato ogni volta che si mette in pausa e riprendere la registrazione.
Se il nome del file originale è &apos;test.mkv&apos;, i segmenti verranno salvati come &apos;test-0001.mkv&apos;, &apos;test-0002.mkv&apos;, ...
I nomi dei file che esistono già verranno ignorati.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="159"/>
        <source>Container:</source>
        <translation>Contenitore:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="167"/>
        <source>The container (file format) that will be used to save the recording.
Note that not all codecs are supported by all containers, and that not all media players can read all file formats.
- Matroska (MKV) supports all the codecs, but is less well-known.
- MP4 is the most well-known format and will play on almost any modern media player, but supports only H.264 video
   (and many media players only support AAC audio).
- WebM is intended for embedding video into websites (with the HTML5 &lt;video&gt; tag). The format was created by Google.
   WebM is supported by default in Firefox, Chrome and Opera, and plugins are available for Internet Explorer and Safari.
   It supports only VP8 and Vorbis.
- OGG supports only Theora and Vorbis.</source>
        <translation>Il contenitore (formato di file) che verrà utilizzato per salvare la registrazione.
Si noti che non tutti i codec sono supportati da tutti i contenitori, e che non tutti i lettori multimediali in grado di leggere tutti i formati di file.
- Matroska (MKV) supporta tutti i codec, ma è meno noto.
- MP4 è il formato più noto e verrà riprodotto su quasi qualsiasi lettore multimediale moderno, ma supporta solo video H.264
(e molti lettori multimediali supportano solo l&apos;audio AAC).
- WebM viene utilizzato per l&apos;integrazione di video in siti web (con il tag HTML5 &lt;video&gt;). Il formato è stato creato da Google.
WebM è supportato di default in Firefox, Chrome e Opera, e sono disponibili i plugins per Internet Explorer e Safari.
Supporta solo VP8 e Vorbis.
- OGG supporta solo Theora e Vorbis.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="176"/>
        <source>Container name:</source>
        <translation>Nome contenitore:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="182"/>
        <source>For advanced users. You can use any libav/ffmpeg format, but many of them are not useful or may not work.</source>
        <translation>Per gli utenti avanzati. È possibile utilizzare qualsiasi formato libav/ffmpeg, ma molti di loro non sono usabili o possono non funzionare.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="198"/>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="200"/>
        <location filename="../GUI/PageOutput.cpp" line="280"/>
        <source>Codec:</source>
        <translation>Codec:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="205"/>
        <source>The codec that will be used to compress the video stream.
- H.264 (libx264) is by far the best codec - high quality and very fast.
- VP8 (libvpx) is quite good but also quite slow.
- Theora (libtheora) isn&apos;t really recommended because the quality isn&apos;t very good.</source>
        <translation>Il codec che verrà utilizzato per comprimere il flusso video.
- H.264 (libx264) è di gran lunga il miglior codec - di alta qualità e molto veloce.
- VP8 (libvpx) è abbastanza buono, ma anche piuttosto lento.
- Theora (libtheora) non è consigliabile perché la qualità non è molto buona.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="209"/>
        <location filename="../GUI/PageOutput.cpp" line="293"/>
        <source>Codec name:</source>
        <translation>Nome codec:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="215"/>
        <source>For advanced users. You can use any libav/ffmpeg video codec, but many of them are not useful or may not work.</source>
        <translation>Per gli utenti avanzati. È possibile utilizzare qualsiasi video codec libav/ffmpeg, ma molti di loro non sono usabili o possono non funzionare.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="216"/>
        <location filename="../GUI/PageOutput.cpp" line="300"/>
        <source>Bit rate (in kbps):</source>
        <translation>Bit rate (in kbps):</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="218"/>
        <source>The video bit rate (in kilobit per second). A higher value means a higher quality.
If you have no idea where to start, try 5000 and change it if needed.</source>
        <translation>Il bit rate video (in kilobit per secondo). Un valore più elevato indica una maggiore qualità.
Se non avete idea di dove cominciare, provare a 5000 e cambialo se necessario.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="220"/>
        <source>Constant rate factor:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Fattore di constant rate:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="225"/>
        <source>This setting changes the video quality. A lower value means a higher quality.
The allowed range is 0-51 (0 means lossless, the default is 23).</source>
        <translation>Questa impostazione cambia la qualità video. Un valore più basso indica una qualità superiore.
L&apos;intervallo consentito è 0-51 (0 significa senza perdita di dati, il valore predefinito è 23).</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="231"/>
        <source>Preset:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Preimpostati:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="236"/>
        <source>The encoding speed. A higher speed uses less CPU (making higher recording frame rates possible),
but results in larger files. The quality shouldn&apos;t be affected too much.</source>
        <translation>La velocità di codifica. Una velocità superiore utilizza meno CPU (rendendo più elevati frame rate di registrazione è possibile),
ma si traduce in file di dimensioni maggiori. La qualità non dovrebbe essere influenzata di troppo.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="238"/>
        <source>CPU used:</source>
        <comment>libvpx setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>CPU utilizzata:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="240"/>
        <source>fastest</source>
        <translation>Più veloce</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="245"/>
        <source>slowest</source>
        <translation>Più lento</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="246"/>
        <source>The encoding speed. A higher value uses *less* CPU time. (I didn&apos;t choose the name, this is the name
used by the VP8 encoder). Higher values result in lower quality video, unless you increase the bit rate too.</source>
        <translation>La velocità di codifica. Un valore più alto utilizza *meno* tempo di CPU. (Non ho scelto il nome, questo è il nome
utilizzato dal codificatore VP8). Valori più alti producono video di qualità inferiore, a meno che non aumentate il bit rate pure.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="248"/>
        <location filename="../GUI/PageOutput.cpp" line="303"/>
        <source>Custom options:</source>
        <translation>Opzioni personalizzate:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="250"/>
        <location filename="../GUI/PageOutput.cpp" line="305"/>
        <source>Custom codec options separated by commas (e.g. option1=value1,option2=value2,option3=value3)</source>
        <translation>Opzioni di codec personalizzate separate da virgole (p.e. option1=value1,option2=value2,option3=value3)</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="251"/>
        <source>Allow frame skipping</source>
        <translation>Consentire salto di fotogrammi</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="252"/>
        <source>If checked, the video encoder will be allowed to skip frames if the input frame rate is
lower than the output frame rate. If not checked, input frames will be duplicated to fill the holes.
This increases the file size and CPU usage, but reduces the latency for live streams in some cases.
It shouldn&apos;t affect the appearance of the video.</source>
        <translation>Se selezionato, sarà consentito al codificatore video di saltare fotogrammi se il frame rate di ingresso è
inferiore al frame rate di uscita. Se non è selezionata, i fotogrammi di ingresso saranno duplicati per riempire i buchi.
Ciò aumenta le dimensioni del file e l&apos;utilizzo della CPU, ma riduce la latenza per i flussi dal vivo in alcuni casi.
Esso non dovrebbe incidere sull&apos;aspetto del video.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="278"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="285"/>
        <source>The codec that will be used to compress the audio stream. You shouldn&apos;t worry too much about
this, because the size of the audio data is usually negligible compared to the size of the video data.
And if you&apos;re only recording your own voice (i.e. no music), the quality won&apos;t matter that much anyway.
- Vorbis (libvorbis) is great, this is the recommended codec.
- MP3 (libmp3lame) is reasonably good.
- AAC is a good codec, but the implementations used here (libvo_aacenc or the experimental ffmpeg aac encoder)
   are pretty bad. Only use it if you have no other choice.
- Uncompressed will simply store the sound data without compressing it. The file will be quite large, but it&apos;s very fast.</source>
        <translation>Il codec che verrà utilizzato per comprimere il flusso audio. Non si deve preoccupare troppo di
questo, poiché la dimensione dei dati audio è generalmente trascurabile rispetto alla dimensione dei dati video.
E se si sta solo registrando la propria voce (cioè senza musica), la qualità non sarà poi così importante.
- Vorbis (libvorbis) è ottimo, questo è il codec consigliato.
- MP3 (libmp3lame) è abbastanza buono.
- AAC è un buon codec, ma le implementazioni usate qui (libvo_aacenc o sperimentale ffmpeg encoder aac)
sono piuttosto scadenti. Usarlo solo se non avete altra scelta.
- Non compresso semplicemente memorizzarà i dati audio senza comprimerlo. Il file sarà abbastanza grande, ma è molto veloce.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="299"/>
        <source>For advanced users. You can use any libav/ffmpeg audio codec, but many of them are not useful or may not work.</source>
        <translation>Per gli utenti avanzati. È possibile utilizzare qualsiasi codec audio libav/ffmpeg, ma molti di loro non sono usabili o possono non funzionare.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="302"/>
        <source>The audio bit rate (in kilobit per second). A higher value means a higher quality. The typical value is 128.</source>
        <translation>Il bit rate audio (in kilobit per secondo). Un valore più elevato indica una maggiore qualità. Il valore tipico è 128.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="319"/>
        <source>Back</source>
        <translation>Indietro</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="320"/>
        <source>Continue</source>
        <translation>Continuare</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="546"/>
        <location filename="../GUI/PageOutput.cpp" line="554"/>
        <source>not installed</source>
        <translation>non installato</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="548"/>
        <location filename="../GUI/PageOutput.cpp" line="556"/>
        <source>not supported by container</source>
        <translation>non supportato dal contenitore</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="599"/>
        <source>Save recording as</source>
        <translation>Salva registrazione come</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="639"/>
        <source>You did not select an output file!</source>
        <translation>Non hai selezionato un file di output!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="644"/>
        <source>The file &apos;%1&apos; already exists. Are you sure that you want to overwrite it?</source>
        <translation>Il file &apos;%1&apos; esiste già. Sei sicuro di voler sovrascrivere?</translation>
    </message>
</context>
<context>
    <name>PageRecord</name>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="146"/>
        <source>Recording</source>
        <translation>Registrazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="150"/>
        <source>Enable recording hotkey</source>
        <translation>Abilita tasto di scelta rapida di registrazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="151"/>
        <source>Enable sound notifications</source>
        <translation>Attiva notifiche sonore</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="152"/>
        <source>Hotkey:</source>
        <translation>tasto di scelta rapida:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="153"/>
        <source>Ctrl +</source>
        <translation>Ctrl +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="154"/>
        <source>Shift +</source>
        <translation>Shift +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="155"/>
        <source>Alt +</source>
        <translation>Alt +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="156"/>
        <source>Super +</source>
        <translation>Super +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="158"/>
        <source>The key that you have to press (combined with the given modifiers) to start or pause recording.
The program that you are recording will not receive the key press.</source>
        <translation>Il tasto che devi premere (in combinazione con i modificatori indicati) per avviare o mettere in pausa la registrazione.
Il programma che si sta registrando non riceverà la pressione del tasto.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="198"/>
        <source>Information</source>
        <translation>Informazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="200"/>
        <source>Total time:</source>
        <translation>Tempo totale:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="202"/>
        <source>FPS in:</source>
        <translation>FPS in:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="204"/>
        <source>FPS out:</source>
        <translation>FPS out:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="206"/>
        <source>Size in:</source>
        <translation>Dimensione in:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="208"/>
        <source>Size out:</source>
        <translation>Dimensione out:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="210"/>
        <source>File name:</source>
        <translation>Nome file:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="213"/>
        <source>File size:</source>
        <translation>Dimensione file:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="215"/>
        <source>Bit rate:</source>
        <translation>Bit rate:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="238"/>
        <source>Preview</source>
        <translation>Anteprima</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="242"/>
        <source>Preview frame rate:</source>
        <translation>Frame rate anteprima:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="246"/>
        <source>Note: Previewing requires extra CPU time (especially at high frame rates).</source>
        <translation>Nota: L&apos;anteprima richiede tempo di CPU in più (soprattutto a frame rate elevati).</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="295"/>
        <source>Log</source>
        <translation>Log</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="310"/>
        <location filename="../GUI/PageRecord.cpp" line="318"/>
        <source>Cancel recording</source>
        <translation>Cancella registrazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="311"/>
        <location filename="../GUI/PageRecord.cpp" line="317"/>
        <source>Save recording</source>
        <translation>Salva registrazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="365"/>
        <source>You have not saved the current recording yet, if you quit now it will be lost.
Are you sure that you want to quit?</source>
        <translation>Non hai ancora salvato la registrazione corrente, se si esce ora andrà persa.
Sei sicuro di voler uscire?</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="521"/>
        <source>Starting page ...</source>
        <translation>Avvio pagina ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="540"/>
        <location filename="../GUI/PageRecord.cpp" line="690"/>
        <location filename="../GUI/PageRecord.cpp" line="776"/>
        <source>Error: Something went wrong during initialization.</source>
        <translation>Errore: Qualcosa è andato storto durante l&apos;inizializzazione.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="547"/>
        <source>Started page.</source>
        <translatorcomment>Pagina avviata.</translatorcomment>
        <translation>Started page.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="576"/>
        <source>Stopping page ...</source>
        <translation>Arresto pagina ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="602"/>
        <source>Stopped page.</source>
        <translation>Pagina fermata.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="629"/>
        <source>Starting output ...</source>
        <translation>Avvio output ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="640"/>
        <source>Error: Could not get the size of the OpenGL application because GLInject has not been started.</source>
        <translation type="unfinished">Errore: Impossibile ottenere la dimensione dell&apos;applicazione OpenGL perché GLInject non è stato avviato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="645"/>
        <source>Error: Could not get the size of the OpenGL application. Either the application wasn&apos;t started correctly, or the application hasn&apos;t created an OpenGL window yet. If you want to start recording before starting the application, you have to enable scaling and enter the video size manually.</source>
        <translation>Errore: Impossibile ottenere la dimensione dell&apos;applicazione OpenGL. In entrambi i casi l&apos;applicazione non è stata avviata correttamente, o l&apos;applicazione non ha ancora creato una finestra OpenGL. Se si desidera avviare la registrazione prima di avviare l&apos;applicazione, è necessario abilitare il ridimensionamento e inserire le dimensioni del video manualmente.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="681"/>
        <source>Started output.</source>
        <translation>Output avviato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="701"/>
        <source>Stopping output ...</source>
        <translation>Arresto output ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="719"/>
        <source>Stopped output.</source>
        <translation>Output fermato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="747"/>
        <source>Starting input ...</source>
        <translation>Avvio input ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="752"/>
        <source>Error: Could not create a GLInject input because GLInject has not been started.</source>
        <translation type="unfinished">Errore: Impossibile creare un ingresso GLInject perché GLInject non è stato avviato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="771"/>
        <source>Started input.</source>
        <translation>Input avviato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="795"/>
        <source>Stopping input ...</source>
        <translation>Arresto input ...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="809"/>
        <source>Stopped input.</source>
        <translation>Input fermato.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="872"/>
        <location filename="../GUI/PageRecord.cpp" line="886"/>
        <source>Pause recording</source>
        <translation>Pausa registrazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="875"/>
        <location filename="../GUI/PageRecord.cpp" line="879"/>
        <location filename="../GUI/PageRecord.cpp" line="889"/>
        <source>Start recording</source>
        <translation>Avvia registrazione</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="897"/>
        <source>Stop preview</source>
        <translation>Ferma anteprima</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="900"/>
        <source>Start preview</source>
        <translation>Avvia anteprima</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="934"/>
        <source>Error: Something went wrong while creating the synth.</source>
        <translation>Errore: Qualcosa è andato storto durante la creazione del synth.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="966"/>
        <source>Are you sure that you want to cancel this recording?</source>
        <translation>Sei sicuro di voler cancellare questa registrazione?</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="979"/>
        <source>You haven&apos;t recorded anything, there is nothing to save.

The start button is at the top ;).</source>
        <translation>Non è stato registrato nulla, non c&apos;è niente da salvare.

Il pulsante di avviamento è in alto;).</translation>
    </message>
</context>
<context>
    <name>PageWelcome</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="35"/>
        <source>&lt;p&gt;Welcome to SimpleScreenRecorder!&lt;/p&gt;

&lt;p&gt;Despite the name, this program actually has a lot of options. Don&apos;t worry though, there are really just two things that you need to know. One, the default settings are usually fine. If you don&apos;t know what something does, just use the default. Two, almost all settings have tooltips. Just hover the mouse over something to find out what it does.&lt;/p&gt;

&lt;p&gt;For more information:&lt;br&gt;
%1&lt;/p&gt;</source>
        <translation>&lt;p&gt;Benvenuti a SimpleScreenRecorder!&lt;/p&gt;

&lt;p&gt;Nonostante il nome, questo programma ha in realtà un sacco di opzioni. Non preoccupatevi però, ci sono davvero solo due cose che dovete sapere. Uno, le impostazioni predefinite sono di solito giuste . Se non sai cosa fa qualcosa, basta usare il default. Due, quasi tutte le impostazioni hanno suggerimenti. Basta passare il mouse sopra qualcosa per scoprire cosa fa.&lt;/p&gt;

&lt;p&gt;Per maggiori informazioni:&lt;br&gt;
%1&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="45"/>
        <source>About SimpleScreenRecorder</source>
        <translation>Info su SimpleScreenRecorder</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="46"/>
        <source>Continue</source>
        <translation>Continuare</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <location filename="../common/Dialogs.cpp" line="31"/>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="33"/>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="35"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Warning: Pixel format is not supported (%1 -&gt; %2), using swscale instead. This is not a problem, but performance will be worse.</source>
        <translation type="obsolete">Attenzione: il formato pixel non è supportato (%1 -&gt; %2), utilizzando swscale. Questo non è un problema, ma le prestazioni caleranno.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get swscale context!</source>
        <comment>Don&apos;t translate &apos;swscale&apos;</comment>
        <translation type="obsolete">Errore: Impossibile ottenere contesto di swscale!</translation>
    </message>
    <message>
        <source>Warning: Memory is not properly aligned for SSE, using fallback converter instead. This is not a problem, but performance will be worse.</source>
        <comment>Don&apos;t translate &apos;fallback&apos;</comment>
        <translation type="obsolete">Attenzione: La memoria non è correttamente allineata per SSE, utilizzando fallback converter. Questo non è un problema, ma le prestazioni caleranno.</translation>
    </message>
    <message>
        <source>Warning: An overrun has occurred, some samples were lost.</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="obsolete">Attenzione: si è verificato un overrun, alcuni campioni sono andati persi.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t recover device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="obsolete">Errore: Impossibile recuperare dispositivo dopo il overrun!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t start PCM device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="obsolete">Errore: Impossibile avviare dispositivo PCM dopo il overrun!</translation>
    </message>
    <message>
        <source>Stopping input thread ...</source>
        <translation type="obsolete">Arresto thread di input...</translation>
    </message>
    <message>
        <source>Error: Can&apos;t open PCM device!</source>
        <translation type="obsolete">Errore: Impossibile aprire il dispositivo PCM!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get PCM hardware parameters!</source>
        <translation type="obsolete">Errore: Impossibile ottenere i parametri hardware PCM!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t set access type!</source>
        <translation type="obsolete">Errore: Impossibile impostare il tipo di accesso!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t set sample format!</source>
        <translation type="obsolete">Errore: Impossibile impostare il formato campione!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t set sample rate!</source>
        <translation type="obsolete">Errore: Impossibile impostare la frequenza di campionamento!</translation>
    </message>
    <message>
        <source>Warning: Sample rate %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="obsolete">Attenzione: La frequenza di campionamento %1 non è supportata, utilizzando %2. Questo non è un problema.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t set channel count!</source>
        <translation type="obsolete">Errore: Impossibile impostare il numero di canali!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t set period size!</source>
        <translation type="obsolete">Errore: Impossibile impostare le dimensioni periodo!</translation>
    </message>
    <message>
        <source>Warning: Period size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="obsolete">Attenzione: le dimensioni Periodo %1 non è supportato, utilizzando %2 .Questo non è un problema.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t set buffer size!</source>
        <translation type="obsolete">Errore: Impossibile impostare la dimensione del buffer!</translation>
    </message>
    <message>
        <source>Warning: Buffer size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="obsolete">Attenzione: dimensione del buffer %1 non è supportato, utilizzando %2.Questo non è un problema.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t apply PCM hardware parameters!</source>
        <translation type="obsolete">Errore: Impossibile applicare parametri hardware PCM!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t start PCM device!</source>
        <translation type="obsolete">Impossibile avviare il dispositivo PCM!</translation>
    </message>
    <message>
        <source>Input thread started.</source>
        <translation type="obsolete">Thread d&apos;ingresso avviato.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t check whether samples are available!</source>
        <translation type="obsolete">Errore: Impossibile verificare se i campioni sono disponibili!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t read samples!</source>
        <translation type="obsolete">Errore: Impossibile leggere i campioni!</translation>
    </message>
    <message>
        <source>Input thread stopped.</source>
        <translation type="obsolete">Thread d&apos;ingresso fermato.</translation>
    </message>
    <message>
        <source>Exception &apos;%1&apos; in input thread.</source>
        <translation type="obsolete">Eccezione &apos;%1&apos; in input thread.</translation>
    </message>
    <message>
        <source>Unknown exception in input thread.</source>
        <translation type="obsolete">Eccezione sconosciuta in input thread.</translation>
    </message>
    <message>
        <source>Error: Image is too small!</source>
        <translation type="obsolete">Errore: L&apos;immagine è troppo piccola!</translation>
    </message>
    <message>
        <source>Error: Image is too large!</source>
        <translation type="obsolete">Errore: L&apos;immagine è troppo grande!</translation>
    </message>
    <message>
        <source>Error: Image doesn&apos;t fit in memory!</source>
        <translation type="obsolete">Errore: L&apos;immagine non entra in memoria!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get shared memory!</source>
        <translation type="obsolete">Errore: Impossibile ottenere la memoria condivisa!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t attach to shared memory!</source>
        <translation type="obsolete">Errore: Impossibile collegarsi alla memoria condivisa!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get frame shared memory!</source>
        <translation type="obsolete">Errore: Impossibile ottenere fotogramma della memoria condivisa!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t attach to frame shared memory!</source>
        <translation type="obsolete">Errore: Impossibile connettersi al fotogramma della memoria condivisa!</translation>
    </message>
    <message>
        <source>Full command</source>
        <translation type="obsolete">Comando completo</translation>
    </message>
    <message>
        <source>Error: Can&apos;t run command!</source>
        <translation type="obsolete">Errore: impossibile eseguire il comando!</translation>
    </message>
    <message>
        <source>Error: pa_mainloop_prepare failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_prepare&apos;</comment>
        <translation type="obsolete">Errore: pa_mainloop_prepare non riuscito!</translation>
    </message>
    <message>
        <source>Error: pa_mainloop_poll failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_poll&apos;</comment>
        <translation type="obsolete">Errore: pa_mainloop_poll non riuscito!</translation>
    </message>
    <message>
        <source>Error: pa_mainloop_dispatch failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_dispatch&apos;</comment>
        <translation type="obsolete">Errore: pa_mainloop_dispatch non riuscito!</translation>
    </message>
    <message>
        <source>Error: Could not create main loop!</source>
        <translation type="obsolete">Errore: Impossibile creare loop principale!</translation>
    </message>
    <message>
        <source>Error: Could not create context!</source>
        <translation type="obsolete">Errore: Impossibile creare il contesto!</translation>
    </message>
    <message>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio. Try using the ALSA backend instead.</source>
        <translation type="obsolete">Errore: Impossibile connettersi! Motivo: %1
È possibile che il sistema non utilizzi PulseAudio. Provare a utilizzare il backend ALSA invece.</translation>
    </message>
    <message>
        <source>Error: Connection attempt failed! Reason: %1</source>
        <translation type="obsolete">Errore: tentativo di connessione non riuscita! motivo %1</translation>
    </message>
    <message>
        <source>Error: Could not create stream! Reason: %1</source>
        <translation type="obsolete">Errore: Impossibile creare il flusso! motivo: %1</translation>
    </message>
    <message>
        <source>Error: Could not connect stream! Reason: %1</source>
        <translation type="obsolete">Errore: Impossibile connettersi allo stream! motivo: %1</translation>
    </message>
    <message>
        <source>Error: Stream connection attempt failed! Reason: %1</source>
        <translation type="obsolete">Errore: tentativo di connessione allo stream non riuscito! motivo: %1</translation>
    </message>
    <message>
        <source>Error: Could not get names of sources! Reason: %1</source>
        <translation type="obsolete">Errore: Impossibile ottenere i nomi delle fonti! motivo: %1</translation>
    </message>
    <message>
        <source>Error: pa_stream_peek failed!</source>
        <comment>Don&apos;t translate &apos;pa_stream_peek&apos;</comment>
        <translation type="obsolete">Errore: pa_stream_peek non riuscito!</translation>
    </message>
    <message>
        <source>Warning: Audio source was suspended. The current segment will be stopped until the source is resumed.</source>
        <translation type="obsolete">Attenzione: sorgente audio è stata sospesa. Il segmento corrente verrà interrotto fino a quando la sorgente viene ripresa.</translation>
    </message>
    <message>
        <source>Warning: Stream was moved to a different source.</source>
        <translation type="obsolete">Attenzione: Stream è stato spostato in una fonte diversa.</translation>
    </message>
    <message>
        <source>Error: Unsupported X11 image pixel format!</source>
        <translation type="obsolete">Errore: Formato X11 pixel dell&apos;immagine non supportato!</translation>
    </message>
    <message>
        <source>Error: Width or height is zero!</source>
        <translation type="obsolete">Errore: larghezza o l&apos;altezza è pari a zero!</translation>
    </message>
    <message>
        <source>Error: Width or height is too large, the maximum width and height is %1!</source>
        <translation type="obsolete">Errore: larghezza o l&apos;altezza è troppo grande, la massima larghezza e l&apos;altezza è %1!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t open X display!</source>
        <comment>Don&apos;t translate &apos;display&apos;</comment>
        <translation type="obsolete">Errore: Impossibile aprire X display!</translation>
    </message>
    <message>
        <source>Using X11 shared memory.</source>
        <translation type="obsolete">Utilizzando X11 memoria condivisa.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t create shared image!</source>
        <translation type="obsolete">Errore: Impossibile creare un&apos;immagine condivisa!</translation>
    </message>
    <message>
        <source>Not using X11 shared memory.</source>
        <translation type="obsolete">Non usando X11 memoria condivisa.</translation>
    </message>
    <message>
        <source>Warning: XFixes is not supported by server, the cursor has been hidden.</source>
        <comment>Don&apos;t translate &apos;XFixes&apos;</comment>
        <translation type="obsolete">Attenzione: XFixes non è supportata dal server, il cursore è stato nascosto.</translation>
    </message>
    <message>
        <source>Error: Invalid screen bounding box!</source>
        <translation type="obsolete">Errore: delimitazione della schermata non valida!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t attach server to shared memory!</source>
        <translation type="obsolete">Errore: Impossibile collegare server a memoria condivisa!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get image (using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="obsolete">Errore: Impossibile ottenere l&apos;immagine (con memoria condivisa)!
     Solitamente ciò significa che l&apos;area di registrazione non è completamente all&apos;interno dello schermo. O hai cambiato la risoluzione dello schermo?</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get image (not using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="obsolete">Errore: Impossibile ottenere l&apos;immagine (non si usa memoria condivisa)!
Solitamente ciò significa che l&apos;area di registrazione non è completamente all&apos;interno dello schermo. O hai cambiato la risoluzione dello schermo?</translation>
    </message>
    <message>
        <source>Error: Sample rate it zero.</source>
        <translation type="obsolete">Errore: Il campionamento di frequenza è pari a zero.</translation>
    </message>
    <message>
        <source>Error: Encoder requires an unsupported sample format!</source>
        <translation type="obsolete">Errore: Il codificatore richiede un formato di campione non supportato!</translation>
    </message>
    <message>
        <source>Error: Encoding of audio frame failed!</source>
        <translation type="obsolete">Errore: Codifica dei frame audio non riuscita!</translation>
    </message>
    <message>
        <source>Stopping encoder thread ...</source>
        <translation type="obsolete">Arresto encoder thread ...</translation>
    </message>
    <message>
        <source>Error: Can&apos;t find codec!</source>
        <translation type="obsolete">Errore: Impossibile trovare il codec!</translation>
    </message>
    <message>
        <source>Using codec %1 (%2).</source>
        <translation type="obsolete">Utilizzando codec %1 (%2).</translation>
    </message>
    <message>
        <source>Warning: This codec is considered experimental by libav/ffmpeg.</source>
        <translation type="obsolete">Avvertenza: Questo codec è considerato sperimentale per libav/ffmpeg.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t open codec!</source>
        <translation type="obsolete">Errore: Impossibile aprire codec!</translation>
    </message>
    <message>
        <source>Encoder thread started.</source>
        <translation type="obsolete">Encoder thread avviato.</translation>
    </message>
    <message>
        <source>Flushing encoder ...</source>
        <translation type="obsolete">Flushing encoder ...</translation>
    </message>
    <message>
        <source>Encoder thread stopped.</source>
        <translation type="obsolete">Encoder thread fermato.</translation>
    </message>
    <message>
        <source>Exception &apos;%1&apos; in encoder thread.</source>
        <translation type="obsolete">Eccezione &apos;%1&apos; in encoder thread.</translation>
    </message>
    <message>
        <source>Unknown exception in encoder thread.</source>
        <translation type="obsolete">Eccezione sconosciuta in encoder thread.</translation>
    </message>
    <message>
        <source>Stopping encoders ...</source>
        <translation type="obsolete">Arresto encoders ...</translation>
    </message>
    <message>
        <source>Waiting for muxer thread to stop ...</source>
        <translation type="obsolete">Aspettando muxer thread per l&apos;arresto ...</translation>
    </message>
    <message>
        <source>Error: Can&apos;t write header!</source>
        <comment>Don&apos;t translate &apos;header&apos;</comment>
        <translation type="obsolete">Errore: Impossibile scrivere header!</translation>
    </message>
    <message>
        <source>Finishing encoders ...</source>
        <translation type="obsolete">Finalizzando encoders ...</translation>
    </message>
    <message>
        <source>Error: Can&apos;t create new stream!</source>
        <translation type="obsolete">Errore: Impossibile creare nuovo stream!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t get codec context defaults!</source>
        <translation type="obsolete">Errore: Impossibile ottenere le impostazioni predefinite del contesto codec!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t find chosen output format!</source>
        <translation type="obsolete">Errore: Impossibile trovare il formato di output scelto!</translation>
    </message>
    <message>
        <source>Using format %1 (%2).</source>
        <translation type="obsolete">utilizzando il formato %1 (%2).</translation>
    </message>
    <message>
        <source>Error: Can&apos;t allocate format context!</source>
        <translation type="obsolete">Errore: Impossibile assegnare contesto di formato!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t open output file!</source>
        <translation type="obsolete">Errore: Impossibile aprire il file di output!</translation>
    </message>
    <message>
        <source>Error: Can&apos;t write trailer, continuing anyway.</source>
        <comment>Don&apos;t translate &apos;trailer&apos;</comment>
        <translation type="obsolete">Errore: Impossibile scrivere trailer, continua comunque.</translation>
    </message>
    <message>
        <source>Muxer thread started.</source>
        <translation type="obsolete">Muxer thread avviato.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t write frame to muxer!</source>
        <translation type="obsolete">Errore: Impossibile scrivere frame per muxer!</translation>
    </message>
    <message>
        <source>Muxer thread stopped.</source>
        <translation type="obsolete">Muxer thread fermato.</translation>
    </message>
    <message>
        <source>Exception &apos;%1&apos; in muxer thread.</source>
        <translation type="obsolete">Eccezione &apos;%1&apos; in muxer thread.</translation>
    </message>
    <message>
        <source>Unknown exception in muxer thread.</source>
        <translation type="obsolete">Eccezione sconosciuta in muxer thread.</translation>
    </message>
    <message>
        <source>Stopping synchronizer thread ...</source>
        <translation type="obsolete">Arresto sincronizzazione thread ...</translation>
    </message>
    <message>
        <source>Warning: Received video frame with non-monotonic timestamp.</source>
        <translation type="obsolete">Attenzione: video frame ricevuti con data e ora non monotonica.</translation>
    </message>
    <message>
        <source>Warning: Video buffer overflow, some frames will be lost. The audio input seems to be too slow.</source>
        <translation type="obsolete">Attenzione: sovraccarico del buffer Video, andranno persi alcuni fotogrammi. L&apos;ingresso audio sembra essere troppo lento.</translation>
    </message>
    <message>
        <source>Warning: Received audio samples with non-monotonic timestamp.</source>
        <translation type="obsolete">Attenzione: campioni audio ricevuti con timestamp non monotonica.</translation>
    </message>
    <message>
        <source>Warning: Audio input is more than 2% too slow!</source>
        <translation type="obsolete">Attenzione: ingresso audio è più di 5% più lento! {2%?}</translation>
    </message>
    <message>
        <source>Warning: Audio input is more than 2% too fast!</source>
        <translation type="obsolete">Attenzione: ingresso audio è più di 5% più veloce! {2%?}</translation>
    </message>
    <message>
        <source>Warning: Audio buffer overflow, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost). The video input seems to be too slow.</source>
        <translation type="obsolete">Attenzione: sovraccarico del buffer audio, iniziando nuovo segmento per mantenere l&apos;audio in sincronia con il video (alcuni video e/o audio potrebbero andare persi). L&apos;ingresso video sembra essere troppo lento.</translation>
    </message>
    <message>
        <source>Warning: Desynchronization is too high, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost).</source>
        <translation type="obsolete">Attenzione: la desincronizzazione è troppo elevata, iniziando nuovo segmento per mantenere l&apos;audio in sincronia con il video (alcuni video e/o audio potrebbero andare persi).</translation>
    </message>
    <message>
        <source>Warning: Audio input is more than 5% too slow!</source>
        <translation type="obsolete">Attenzione: ingresso audio è più di 5% più lento!</translation>
    </message>
    <message>
        <source>Warning: Audio input is more than 5% too fast!</source>
        <translation type="obsolete">Attenzione: ingresso audio è più di 5% più veloce!</translation>
    </message>
    <message>
        <source>Warning: Received hole in audio stream, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost).</source>
        <translation type="obsolete">Attenzione: buche Ricevute in streaming audio, iniziando nuovo segmento per mantenere l&apos;audio in sincronia con il video (alcuni video e/o audio potrebbero andare persi).</translation>
    </message>
    <message>
        <source>Synchronizer thread started.</source>
        <translation type="obsolete">Sincronizzatore thread avviato.</translation>
    </message>
    <message>
        <source>Synchronizer thread stopped.</source>
        <translation type="obsolete">Sincronizzatore thread fermato.</translation>
    </message>
    <message>
        <source>Exception &apos;%1&apos; in synchronizer thread.</source>
        <translation type="obsolete">Eccezione &apos;%1&apos; in Sincronizzatore thread.</translation>
    </message>
    <message>
        <source>Unknown exception in synchronizer thread.</source>
        <translation type="obsolete">Eccezione sconosciuta in sincronizzazione thread.</translation>
    </message>
    <message>
        <source>Error: Width or height is not an even number!</source>
        <translation type="obsolete">Errore: larghezza o l&apos;altezza non è un numero pari!</translation>
    </message>
    <message>
        <source>Error: Frame rate it zero!</source>
        <translation type="obsolete">Errore: Frequenza fotogrammi Zero!</translation>
    </message>
    <message>
        <source>Error: Encoding of video frame failed!</source>
        <translation type="obsolete">Errore: Codifica di un fotogramma video non riuscita!</translation>
    </message>
    <message>
        <source>Error: Flushing resampler failed! Reason: %s</source>
        <translation type="obsolete">Errore: Flushing di ricampionamento non riuscito! motivo: %s</translation>
    </message>
    <message>
        <source>Resampling from %1 to %2.</source>
        <translation type="obsolete">Ricampionamento da %1 a %2.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t create resampler! Reason: %s</source>
        <translation type="obsolete">Errore: Impossibile creare ricampionamento! motivo: %s</translation>
    </message>
    <message>
        <source>Resampling not needed.</source>
        <translation type="obsolete">Ricampionamento non necessario.</translation>
    </message>
    <message>
        <source>Error: Resampling failed!</source>
        <translation type="obsolete">Errore: ricampionamento non riuscito!</translation>
    </message>
    <message>
        <source>Warning: An underrun has occurred, some samples were too late.</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation type="obsolete">Attenzione: si è verificato un underrun, alcuni campioni erano ritardatari.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t recover device after underrun!</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation type="obsolete">Errore: Impossibile recuperare dispositivo dopo underrun!</translation>
    </message>
    <message>
        <source>Stopping synth thread ...</source>
        <translation type="obsolete">Arresto sintetizzato thread ...</translation>
    </message>
    <message>
        <source>Synth thread started.</source>
        <translation type="obsolete">Sintetizzato thread avviato.</translation>
    </message>
    <message>
        <source>Error: Can&apos;t write samples!</source>
        <translation type="obsolete">Errore: Impossibile scrivere campioni!</translation>
    </message>
    <message>
        <source>Synth thread stopped.</source>
        <translation type="obsolete">Sintetizzato thread fermato.</translation>
    </message>
    <message>
        <source>Exception &apos;%1&apos; in synth thread.</source>
        <translation type="obsolete">Eccezione &apos;%1&apos; in Sintetizzato thread.</translation>
    </message>
    <message>
        <source>Unknown exception in synth thread.</source>
        <translation type="obsolete">Eccezione sconosciuta in Sintetizzato thread.</translation>
    </message>
    <message>
        <source>CPU features</source>
        <translation type="obsolete">Caratteristiche della CPU</translation>
    </message>
    <message>
        <source>Error: Command-line option &apos;%1&apos; does not take a value!</source>
        <translation type="obsolete">Errore: Opzione della riga di comando &apos;%1&apos; non prende un valore!</translation>
    </message>
    <message>
        <source>Error: Unknown command-line option &apos;%1&apos;!</source>
        <translation type="obsolete">Errore: opzione di riga di comando sconosciuta &apos;%1&apos;!</translation>
    </message>
    <message>
        <source>Error: Unknown command-line argument &apos;%1&apos;!</source>
        <translation type="obsolete">Errore: argomento della riga di comando sconosciuto &apos;%1&apos;!</translation>
    </message>
    <message>
        <source>SimpleScreenRecorder has detected that you are using the proprietary NVIDIA driver with flipping enabled. This is known to cause glitches during recording. It is recommended to disable flipping. Do you want me to do this for you?

You can also change this option manually in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation type="obsolete">SimpleScreenRecorder ha rilevato che si sta utilizzando il driver proprietario NVIDIA con Flipping abilitato. Questo può provocare difetti durante la registrazione. Si consiglia di disattivare flipping. Vuoi che io faccia questo per te?

È inoltre possibile modificare manualmente questa opzione nel pannello di controllo NVIDIA.</translation>
    </message>
    <message>
        <source>I couldn&apos;t disable flipping for some reason - sorry! Try disabling it in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation type="obsolete">Non ho potuto disattivare flipping per qualche motivo - spiacente! Prova a disabilitarlo dal pannello di controllo NVIDIA.</translation>
    </message>
    <message>
        <source>SSR started</source>
        <translation type="obsolete">SSR avviato</translation>
    </message>
    <message>
        <source>SSR stopped</source>
        <translation type="obsolete">SSR fermato</translation>
    </message>
    <message>
        <source>Error: Can&apos;t create .ssr directory!</source>
        <translation type="obsolete">Errore: Impossibile creare la directory ssr.!</translation>
    </message>
</context>
<context>
    <name>SyncDiagram</name>
    <message>
        <location filename="../AV/Output/SyncDiagram.cpp" line="49"/>
        <source>Synchronization Diagram</source>
        <translation>Diagramma di sincronizzazione</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="172"/>
        <source>Video in</source>
        <translation>Video in</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="173"/>
        <source>Audio in</source>
        <translation>Audio in</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="174"/>
        <source>Video out</source>
        <translation>Video out</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="175"/>
        <source>Audio out</source>
        <translation>Audio out</translation>
    </message>
</context>
</TS>
