<script type="text/javascript">

	function ReplaceUnderscoreWithSpace()
	{
		var string = "__foo_bar__";	
		var array = string.split("");
		
		for (i = 0; i < array.length; i++)
		{
			if (array[i] != '_')
			{
					break;
			}
		}
		for (j = array.length-1; j >= 0; j--)
		{
			if (array[j] != '_')
			{
				break;
			}
		}
		for (k = i; k < j; k++)
		{
			array[k] = (array[k] == '_') ? ' ' : array[k]; 
			document.write(array)
		}	
ReplaceUnderscoreWithSpace();
}

</script>
