<script>

    let display=$state('');

	function clear(){
        display='';
    }
    function calc(){
        display = eval(display.replace);
    }
    function press(c){
        display+=c;
    }

    function backspace(){
        display = display.length > 1 ? display.slice(0,-1) : '0';
    }

</script>
<div class="text-center mt-3">
    <input class="form-control" readonly bind:value={display} style="font-weight:700;"/>
<table class="table table-sm table-borderless">
    <tbody>
        <tr>
            <td><button type="button" class="btn btn-danger w-100" onclick={()=>clear()}>C</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press('(')}>&lpar;</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press(")")}>&rpar;</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press("/")}>/</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(7)}>7</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(8)}>8</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(9)}>9</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press('*')}>x</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(4)}>4</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(5)}>5</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(6)}>6</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press('-')}>-</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(1)}>1</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(2)}>2</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(3)}>3</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press("+")}>+</button></td>
        </tr>
        <tr>            
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>press()}>.</button></td>
            <td><button type="button" class="btn w-100" style="background-color:lightgray; font-weight:700;" onclick={()=>press(0)}>0</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>backspace()}>⌫</button></td>
            <td><button type="button" class="btn btn-primary w-100" onclick={()=>calc()}>=</button></td>
        </tr>
    </tbody>
</table>
</div>

<style>

table {
    table-layout: fixed;
  }

</style>