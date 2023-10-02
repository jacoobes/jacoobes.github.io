<script> 
    let c = 'o'
    function toggle () {
	window.document.body.classList.toggle('dark-mode')
        c = c == 'o' ? '-' : 'o'
    }
</script>
<button on:click={toggle} class="mode"> 
    <span> 
        {c}
    </span>
</button>

<slot/>

<style> 
    .mode {
	border: none;
        border-radius: 4px;
	padding: 0.5rem;
    }

    :global(body.dark-mode) button {
	background-color: #0084f6;
    }

</style>
