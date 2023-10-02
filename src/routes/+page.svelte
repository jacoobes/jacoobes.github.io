<script> 
    import json from '$lib/projects.json'
    let depth = 1;

    $: padding = (depth + 2)
</script>

<main class="container"> 
   <h1>~/</h1>
   {#each json as proj}
        <div style={"padding-left:"+padding+"rem"}>
            <a href={proj.link}><h2 class="proj">{proj.name}</h2></a>
            <span>{proj.des}</span>
            {#each proj.children ?? [] as child}
                <div style={"padding-left:"+padding*2+"rem"}> 
                    <h3>{proj.name}</h3>
                    <span>{proj.des}</span>
                </div>
            {/each}
        </div>
   {/each}
</main>

<style> 
    .container { 
        display: flex;
        align-items: stretch;
        align-content: center;
        max-width: 50%;
        flex-direction: column;
    }
    
    .proj:hover {
        text-decoration: underline;
    }

    :global(body) {
	background-color: #f2eee2;
	color: #0084f6;
	transition: background-color 0.3s
    }
    :global(body.dark-mode) {
	background-color: #1d3040;
	color: #0084f6;
    }
</style>
