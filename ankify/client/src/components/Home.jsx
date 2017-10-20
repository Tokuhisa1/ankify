import React from 'react';

const Home = () => {
  return (
    <div class="span8">
      <h2>About Anki</h2>

      <p>Anki is a program which makes remembering things easy. Because it's a lot more efficient than traditional study methods, you can either greatly decrease your time spent studying, or greatly increase the amount you learn.</p>

        <p>Anyone who needs to remember things in their daily life can benefit from Anki. Since it is content-agnostic and supports images, audio, videos and scientific markup (via LaTeX), the possibilities are endless.<br></br>

          For example:
        </p>
        <ul>
            <li>Learning a language</li>
            <li>Studying for medical and law exams</li>
            <li>Memorizing people's names and faces</li>
            <li>Brushing up on geography</li>
            <li>Mastering long poems</li>
            <li>Even practicing guitar chords!</li>
        </ul>

        <h2>Features</h2>
        <div class="row-fluid">
            <div class="span6">
                <p><span class="lead text-heading">Synchronization</span><br></br>
                  Use the free AnkiWeb synchronization
                    service to keep your cards in sync across
                    multiple devices.</p>

                <p><span class="lead text-heading">Flexibility</span><br></br>
                  From card layout to review timing, Anki has a wealth of options for you to customize.</p>

                <p><span class="lead text-heading">Media-Rich</span><br></br>
                  Embed audio clips, images, videos and scientific markup on your cards, with precise control over how it's shown.</p>
            </div>

            <div class="span6">
                <p><span class="lead text-heading">Optimized</span><br></br>
                  Anki will handle decks of 100,000+ cards with no problems.</p>

                <p><span class="lead text-heading">Fully Extensible</span><br></br>
                  There are a large number of add-ons available.</p>

                <p><span class="lead text-heading">Open Source</span><br></br>
                  Because the code and storage format is open, your important data is safe.</p>
            </div>
        </div>
    </div>
  );
};

export default Home;
