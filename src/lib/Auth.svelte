<script lang="ts">
    import { magicLogin } from './supabase';

    enum LoginStage {
        None = 0,
        Magic = 1,
        CheckMail = -1
    }

    let loginStage: LoginStage = LoginStage.None;

    let email = "";
</script>

{#if loginStage == LoginStage.None}
<h2>Pick a Login Method</h2>
<button on:click={() => loginStage = LoginStage.Magic}>Magic</button>
{:else if loginStage == LoginStage.Magic}
<input type="email" placeholder="example@example.com" bind:value={email}>
<button on:click={() => {
    magicLogin(email);
    loginStage = LoginStage.CheckMail
}}>Login With Magic Link</button>
{:else if loginStage = LoginStage.CheckMail}
<h2>Check Your Inbox</h2>
{/if}