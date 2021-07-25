<script>
  import { sleep } from '../utils';
  import Card from '../components/Card.svelte';

  export let selection;
  console.log(selection);

  const loadDetails = async (celeb) => {
    const res = await fetch(
      `https://cameo-explorer.netlify.app/celebs/${celeb}.json`
    );
    return await res.json();
  };

  const promises = selection.map((round) =>
    Promise.all([loadDetails(round.a.id), loadDetails(round.b.id)])
  );

  let i = 0;
  let lastResult;
  let showIcon;

  const submit = async (a, b, sign) => {
    lastResult = Math.sign(a.price - b.price) === sign ? 'right' : 'wrong';
    showIcon = true;

    await sleep(1500);
    showIcon = false;
    if (i < selection.length - 1) {
      i += 1;
    } else {
      // TODO end game
    }
  };
</script>

<header>
  <p>
    Tap on the more monetisable celebrity's face, or tap 'same price' if society
    values them equally.
  </p>
</header>

<div class="game-container">
  {#await promises[i] then [a, b]}
    <div class="game">
      <div class="card-container">
        <!-- the sign is 1 because we're gessing that a.price > b.price, and therefore Math.sign(a.price - b.price) = 1 -->
        <Card
          celeb={a}
          on:select={() => {
            submit(a, b, 1);
          }}
        />
      </div>
      <div>
        <!-- the sign is 0 because we're gessing that a.price = b.price, and therefore Math.sign(a.price - b.price) = 0 -->
        <button
          class="same"
          on:click={() => {
            submit(a, b, 0);
          }}
        >
          Same price
        </button>
      </div>
      <div class="card-container">
        <!-- the sign is -1 because we're gessing that a.price < b.price, and therefore Math.sign(a.price - b.price) = -1 -->
        <Card
          celeb={b}
          on:select={() => {
            submit(a, b, -1);
          }}
        />
      </div>
    </div>
  {:catch}
    <p class="error">Ooops! Failed to load data</p>
  {/await}
</div>

{#if showIcon}
  <img
    class="giant-result"
    src="/icons/{lastResult}.svg"
    alt="{lastResult} answer"
  />
{/if}

<div class="results">
  <p>Results go here</p>
</div>

<style>
  .game-container {
    flex: 1;
  }

  .game {
    display: grid;
    grid-template-rows: 1fr 2em 1fr;
    grid-gap: 0.5em;
    width: 100%;
    height: 100%;
    max-width: min(100%, 40vh);
    margin: 0 auto;
  }

  .game > div {
    display: flex;
    align-items: center;
  }

  .same {
    width: 100%;
    margin: 0;
  }

  .error {
    color: red;
  }

  .giant-result {
    position: fixed;
    width: 50vmin;
    height: 50vmin;
    left: calc(50vw - 25vmin);
    top: calc(50vh - 25vmin);
    opacity: 0.5;
  }

  @media (min-width: 640px) {
    .game {
      max-width: 100%;
      grid-template-rows: none;
      grid-template-columns: 1fr 8em 1fr;

      /* work around safari bug*/
      max-height: calc(100vh - 6em);
    }

    .same {
      height: 8em;
    }
  }
</style>
