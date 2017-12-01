// Generate number between start and end
// start <= x < end
function RandomRange(start, end) {
	return Math.floor(Math.random() * end) + start;
}

function GenerateBoard(width, height, numFilledNumbers) {
	var board = [];
	board.length = width;
	
	for(var i = 0; i < width; i++) {
		var column = [];
		column.length = height;		
		for(var j = 0; j < height; j++) {
			column[j] = " ";
		}
		
		board[i] = column;			
	}
			
	for(var i = 0; i < numFilledNumbers; i++) {		
		var row = RandomRange(0, 4);
		var col = RandomRange(0, 4);
		
		var column = board[row];
		
		// Pick another cell if this one is filled already
		if(column[col] != " ") {
			i--;
			continue;
		}
		
		column[col] = "" + RandomRange(1, 9);		
	}
		
	return board;
}

function PrintBoard(board) {
	console.log(board)
}

var board = GenerateBoard(4, 4, 6);
PrintBoard(board);
